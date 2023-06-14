import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import Login from './Login'
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  // useEffect(()=>{
  //   auth.onAuthStateChanged(userAuth =>{
  //     if(userAuth){
  //       //user is logged in
  //       dispatch(login({
  //         email:userAuth.email,
  //         uid:userAuth.uid,
  //         diplayName:userAuth.displayName,
  //         photoUrl: userAuth.photoURL,
  //       }))
  //     }else{
  //       //usser is logged out
  //       dispatch(logout())
  //     }
  //   })
  // })
  
  return (
    <div className="app">
     <Header/>

     {!user? (
      <Login />
     ) : ( 
     <div className='app_body'>
        <Sidebar />
        <Feed />
        <Widgets/>
      </div>
     )}
    </div>
  );
}

export default App;
