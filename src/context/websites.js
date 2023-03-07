import {useState, createContext} from 'react';
import eSimg from '../images/everythingStore.png'
import mLimg from '../images/movieListing.png'
import wTEimg from '../images/whatToEat.png'

export const WebsitesContext = createContext();

const WebsitesContextProvide = (props) => {

    

    const [websites, setWebsites] = useState([
        {
        title: 'What to Eat',
        img: wTEimg,
        desc: 'Full MERN application that allows a user to make an account, find recipes based on ingredients they have, and favorite them for later.',
        link: 'https://whattoeat.onrender.com',
        git: 'https://github.com/JonCTack/WhatToEat'
        },
        {
        title: 'Movie Listing',
        img: mLimg,
        desc: 'React app that can find a movie, share information on that movie, and has a favorite list.',
        link: 'https://movielisting.onrender.com',
        git: 'https://github.com/JonCTack/OMDb-Search'
        },
        {
        title: 'Everything Store',
        img: eSimg,
        desc: 'Fullstack mock store that allows new items and modifying items.',
        link: 'https://everythingstore.onrender.com',
        git: 'https://github.com/JonCTack/ProductStore'
        },
    ]);

    return (
        <WebsitesContext.Provider value={{
            websites, setWebsites,
        }}>
            {props.children}
        </WebsitesContext.Provider>
    )
}

export default WebsitesContextProvide;