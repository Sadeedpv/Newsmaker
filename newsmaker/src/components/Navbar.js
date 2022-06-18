import React from 'react'
import {Dropdown, Input} from '@douyinfe/semi-ui'
import './navbar.css'
import {FaSearch, FaAngleUp} from 'react-icons/fa'

function Navbar() {

    const category = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology']
  return (
    <div className='flex-nav'>
        <div className='nav-header'>
            <h2>news</h2>
        </div>
        <div className='nav-item'>
            <ul>
                <li>
                    <Input placeholder='Search' size='large' suffix={<FaSearch />} className='input'/>
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
  )
}


function Drop(props){
    return(
        <Dropdown className='dropdown'
        render={
            <Dropdown.Menu>
                {props.category.map((item, index) =>{
                    return <Dropdown.Item key={index}>{item}</Dropdown.Item>
                })}
            </Dropdown.Menu>
        }
    >
        <a className='hover'>Articles <FaAngleUp style={{paddingTop:'5px'}}  className='arrowicon'/></a>
    </Dropdown>
    )
}

export default Navbar