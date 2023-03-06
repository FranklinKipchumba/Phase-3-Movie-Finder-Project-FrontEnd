import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import CreateTask from '../modals/CreateMovie';
import { useState } from 'react';
import Card from './Card';
import Search from '../Search/search';
import "../Signup/signup.css";

const MovieList =({movies, loggedIn, deleteMovie, handleNewPost}) => {
    const [modal, setModal] = useState(false);

    const toggle =()=> {
        setModal(!modal);
    }

    

  

  return (
    <>
    
     <div className='header text-center'>
        <h3>Movies App</h3>
        <button className="btn btn-primary mt-2" onClick={()=> setModal(true)}>Create Movie</button>
        <div class = "logout-form">
        <a id='logout' href='/'>LogOut</a>
        </div>
        
    </div>
   
    <div className='task-container'>
       
        {movies.map((obj) => <Card taskObj={obj} handleNewPost={handleNewPost} loggedIn={loggedIn} deleteMovie={deleteMovie} />)}
        
    </div> 
   
    
    <CreateTask toggle ={toggle} handleNewPost={handleNewPost} modal={modal} loggedIn={loggedIn}/>
    
     
    </>
     );
};


export default MovieList;