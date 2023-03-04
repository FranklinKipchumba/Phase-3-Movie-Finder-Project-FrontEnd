import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import CreateMovie from '../modals/CreateMovie';
import { useState } from 'react';
import Card from './Card/card';
import Search from './components/Search/search';
import "../components/Signup/signup.css";

const ToDoList =({movies, loggedIn, deletemovie, handleNewPost}) => {
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
       
        {movies.map((obj) => <Card taskObj={obj} handleNewPost={handleNewPost} loggedIn={loggedIn} deleteNote={deletemovie} />)}
        
    </div> 
   
    
    <CreateMovie toggle ={toggle} handleNewPost={handleNewPost} modal={modal} loggedIn={loggedIn}/>
    
     
    </>
     );
};


export default CreateMovie;