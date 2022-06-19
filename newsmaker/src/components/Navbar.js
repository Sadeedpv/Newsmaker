import React, { useEffect, useState } from 'react'
import {Dropdown, Input} from '@douyinfe/semi-ui'
import './navbar.css'
import {FaSearch, FaAngleUp} from 'react-icons/fa'
import { useNavigate} from 'react-router-dom'

function Navbar() {
    const [search, setSearch] = React.useState(false);
    const navigate = useNavigate();
    const [input, setinput] = useState('');

    const category = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology']
  return (
    <>
    { search && (navigate('/search', { state: { input:input} })) }
    <div className='flex-nav'>
        <div className='nav-header'>
            <h2>news</h2>
        </div>
        <div className='nav-item'>
            <ul>
                <li>
                    <Input placeholder='Search' size='large' suffix={<FaSearch />} className='input' value={input} onChange={(e) =>{
                        setinput(e)
                    }} onKeyPress={(e) =>{
                        if (e.key === 'Enter'){
                            e.preventDefault()
                           setSearch(true)
                        }
                    }}/>
                </li>
                <li>
                    <Drop category={category}/>
                </li>
                <li>
                    <a href='https://Github.com/Sadeedpv'>Github</a>
                </li>
            </ul>


        </div>
    </div>
    </>
  )
}


function Drop(props){
    const navigate = useNavigate();
    
    return(
        <Dropdown className='dropdown'
        render={
            <Dropdown.Menu>
                {props.category.map((item, index) =>{
                    return <Dropdown.Item key={index} onClick={() =>{
                        navigate('/search', { state: { input:item} })
                        
                    }}>{item}</Dropdown.Item>
                })}
            </Dropdown.Menu>
        }
    >
        <a className='hover'>Articles <FaAngleUp style={{paddingTop:'5px'}}  className='arrowicon'/></a>
    </Dropdown>
    )
}

export default Navbar