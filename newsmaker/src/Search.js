import React, { useEffect, useRef, useState } from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import {useLocation, useNavigate} from 'react-router-dom'
import { Spin } from '@douyinfe/semi-ui';
import axios from 'axios';
import {Card} from './components/Popular';
import './components/popular.css'


function Search(props) {

    const navigate = useNavigate()
    const {state} = useLocation();
    const {input} = state || props.input;

    const [post, setPosts] = useState();
    const spinref = useRef();
    
    useEffect(() =>{
        spinref.current.style.display = 'none';
        axios.get(`https://gnews.io/api/v4/search?q=${input}&token=${process.env.REACT_APP_API_KEY}&lang=en`).then(res =>{
            setPosts(res.data.articles)
        })
    }, [])
        return (
            <>
        
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'black',
                    fontSize: '1.6em',
                    fontWeight: '500',
                    padding: '1.4em',
                    textAlign: 'center',
                }}>See What's happening on {'   '}<span style={{
                    color: '#f9a825',
                    fontWeight:'650',
                    padding:'5px',
                }}>{input}</span></div>
                <div ref={spinref} style={{display:'grid', placeItems:'center', marginTop:'40px'}}><Spin size='large' /></div>
                <div className='flex-card'>
                {post && post.map((post, index) =>{
                    return(
                        <Card title={post.title} key={index} author={post.source.name} desc = {post.description} img={post.image} date={post.publishedAt} url={post.url}/>
                    )
                })}
                </div>
                <Footer />
            </>
          )

}

export default Search