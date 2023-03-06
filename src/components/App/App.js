import '.components/App/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import UserList from './components/User_List/UserList';
import Signup from './components/Signup/signup';
import Login from './components/Login/login';



function App() {

  const [loggedIn, setLoggedIn] = useState({})
  const [movies, setMovies] = useState([])
  const [post, setPosts] = useState(true)

  const addNewUser = (newUser) => setLoggedIn(newUser);


  useEffect(() => {
    fetch(`http://localhost:9293/users/${loggedIn.id}/movies`)
    .then(r => r.json())
    .then( (moviesarr) => {
      console.log(moviesarr)
      setMovies(moviesarr)
    })
    }, [loggedIn, post])

    const deleteMovie = (id) => {
        const newMovies = movies.filter(movie => movie.id !== id)
        setMovies(newMovies)
    }

    function handleNewPost() {
      setPosts((post) => !post)
    }



  return (
    <div className="App">
      <Routes>
          <Route path='/home' element= {<UserList movies={movies} loggedIn={loggedIn} deleteMovies={deleteMovie} handleNewPost={handleNewPost}/>}/> 
          <Route path='/users/new' element = {<Signup addNewUser={addNewUser}/>}/>
          <Route path='/' element = { <Login setLoggedIn={setLoggedIn} />}/>
      </Routes>
    </div>
  );
}

export default App;
