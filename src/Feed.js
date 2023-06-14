import React, { useEffect, useState } from 'react';
import { db } from '../src/firebase';
import { collection, getDocs, addDoc, serverTimestamp, query, orderBy  } from "@firebase/firestore";
import "./Feed.css";
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import ViewDayIcon from '@material-ui/icons/ViewDay';
import InputOption from './InputOption';
import Post from './Post';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';

export default function Feed() {
const user = useSelector(selectUser);
const [input,setInput]=  useState('');
const [posts, setPosts]=useState([]);

// const fetchPosts = async () =>{
//   await getDocs(collection(db, 'posts'))
//   .then((onSnapshot)=>{  
//     const post = onSnapshot.docs.map((doc) => (
//       {
//         id:doc.id ,
//        ...doc.data()
        
//       }
//       ));
//      setPosts(post);
//   })
//   console.log("fuck fetch ",posts);
// }

const fetchPosts = async () =>{
  const q = query(collection(db, 'posts'), orderBy('timestamp','desc'));
  const documentSnapshots = await getDocs(q);
  const posts= documentSnapshots.docs.map((doc) => ({
    id:doc.id ,
    ...doc.data()
  }));
  setPosts(posts)
}

useEffect(()=>{
 fetchPosts();
},[])

const addPosts = async () =>{
  try {
    console.log('useeer:',{...user})
    const docRef = await addDoc(collection(db, "posts"), {
      name:user.displayName,
      description:user.email,
      message: input,
      photoUrl:user.profileUrl || '',
      timestamp: serverTimestamp()
    });
    console.log("Document written with ID: ", docRef.id);

  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

const sendPost= (e) =>{
  e.preventDefault();
  addPosts();
  setInput('');
  fetchPosts();
}

  return (
    <div className='feed'>
      <div className='feed_inputContainer'>
        <div className='feed_input'>
          <CreateIcon />
          <form>
            <input value={input} onChange={e=> setInput(e.target.value)} type='text'/>
            <button onClick={sendPost} type='submit'>Send</button>
          </form>
        </div>
        <div className='feed_inputOptions'>
          <InputOption Icon={ImageIcon} title='Photo' color='#70B5F9'/>
          <InputOption Icon={SubscriptionsIcon} title='Video' color='#E7A33E'/>
          <InputOption Icon={EventNoteIcon} title='Event' color='#CC0CBCD0C'/>
          <InputOption Icon={ViewDayIcon} title='Write article' color='#7FC15E'/>
        </div>
      </div>

       {/* Posts */}
       <FlipMove>
      {posts.map(( {id, name,description,message,photoUrl })=>(
        <Post 
         key={id}
         name={name}
         description={description}
         message={message}
         photoUrl={photoUrl}
        />
      ))} 
      </FlipMove>
    </div>
  ) 
}
