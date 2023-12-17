import React, { useRef,useState } from 'react'
import { useNavigate } from 'react-router-dom';

import './imgunqcss.css'
import yourImage from './Screenshot 2023-09-13 142610.png';
const Imgunq = () => {
    const navigate= useNavigate('');
    
    const [image_url,setImageURL]=useState("/");
    let inputRef = useRef(null);
    
    function movetologin(){
         const logoutimg =document.getElementById("logoutimg");
         logoutimg.addEventListener("click",()=>{
                navigate('/')
         })
    }
   
   async function generate(){
        if(inputRef.current.value===""){
            return 0;
        }
        if (!inputRef.current.value) {
            return;
        }

        const API_KEY = '8L72Jii3WwGi3d0BaPnzPxnzLSlvwpgEzqbap7AS1Do4OTR3S5knUqNq';
        const searchQuery = inputRef.current.value;

        try {
            const response = await fetch(`https://api.pexels.com/v1/search?query=${searchQuery}&per_page=1`, {
                headers: {
                    Authorization: API_KEY,
                },
            });

            const data = await response.json();
            // Assuming the first image returned is used
            const imageUrl = data.photos && data.photos.length > 0 ? data.photos[0].src.medium : '';
            setImageURL(imageUrl);
        } catch (error) {
            console.error('Error fetching image:', error);
        }
        
    }
  return(
        <div className='imgunq'>
            <div className='container-centered' id="imgunqfile">
                  <div className="row">
                      <input type='text' ref={inputRef} name='search' placeholder='Enter your prompt'  id="searchbar"/>
                      <br/>
                      <button type="button" className="btn btn-light" id="loginimg" onClick={()=>{generate()}}>Generate</button>
                  </div>
                     <div className='images-container' id='images_container'>
                         <img src={image_url==="/"?yourImage:image_url} id='img'/>
                    </div> 
            </div>
           
            <button type="button" className="btn btn-info" id="logoutimg" onClick={movetologin}>Logout</button>

        </div>
    )  
}

export default Imgunq

