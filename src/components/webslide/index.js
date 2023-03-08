import React, { useContext } from 'react'
import { WebsitesContext } from '../../context/websites'
import './index.css'

const Webslide = ({slideNumber}) => {
    
    let {websites} = useContext(WebsitesContext) 

    let websiteJSX = websites.map((el,i) => {
        return(
            <div key={i} className='Slide'>
                <h1>{el.title}</h1>
                <img src={el.img} alt='website preview'/>
                <p>{el.desc}</p>
                <p><a className='App-link' href={el.link}>Link to the Website</a></p>
                <a className='App-link' href={el.git}>Link to github repository</a>
            </div>
        )
    })

    let thisSlide = websiteJSX[slideNumber]

    return (
    thisSlide
  )
}

export default Webslide