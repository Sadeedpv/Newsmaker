import React, { useEffect, useRef, useState } from 'react'
import './popular.css';
import axios from 'axios';
import { Spin } from '@douyinfe/semi-ui';

function Popular() {
    const spinref = useRef()
    const [posts, setPosts] = useState();

    useEffect(() =>{
        spinref.current.style.display = 'none';
        axios.get(`https://gnews.io/api/v4/top-headlines?lang=en&token=${process.env.REACT_APP_API_KEY}`).then(res =>{
            setPosts(res.data.articles)
        })
    }, [])
  return (
    <>
    <div className='trending'>
        <p>What is <span className='trending-title'>Popular</span> now?</p>
    </div>
    <div className='flex-card'>
        <span ref={spinref} ><Spin size='large' /></span>
        {posts && posts.map((post, index) =>{
            return(
                <Card title={post.title} key={index} author={post.source.name} desc = {post.description} img={post.image} date={post.publishedAt} url={post.url}/>
            )
        })}
    </div>
    </>
  )
}


function Card(props){
    return(
        <a href={props.url} style={{color:'black', textDecoration:'none'}}><div className='card'>
            <div className='cardimg'><img src={props.img} alt='Image not available' height={300} width={350} /><hr/></div>
            <div className='card-title'>{props.title}</div>
            <div className='card-content'>{props.desc}</div>
            <div className='cardfooter'>
                <div className='card-author'>{props.author}</div>
                <div className='card-date'>{props.date}</div>
            </div>
        </div></a>
    )
}

export {Popular, Card};