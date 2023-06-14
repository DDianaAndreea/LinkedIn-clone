import { Avatar } from '@material-ui/core';
import './Sidebar.css';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

export default function Sidebar() {
    const user = useSelector(selectUser);

    const recentItem=(topic) =>{
        return (
            <div className='sidebar_recentItem'>
                <span className='sidebar_hash'>#</span>
                <p>{topic}</p>
            </div>
        )
    }

  return (
    <div className='sidebar'>
        <div className='sidebar_top'>
            <img src='https://img.freepik.com/free-vector/detailed-hand-painted-pink-watercolour-background_1048-17039.jpg?w=996&t=st=1686563217~exp=1686563817~hmac=070b8d623eb18f624021c88eaba568b81db6a482774d13b1cb5f8f8395665a0e' alt=''/>
            <Avatar src={user.profileUrl}>{user.email[0]} </Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>

        <div className='sidebar_stats'>
            <div className='sidebar_stat'>
                <p>Who viewed you</p>
                <p className='sidebar_statNumber'>7,25</p>
            </div>
            <div className='sidebar_stat'>
                <p>Views on post</p>
                <p className='sidebar_statNumber'>2,25</p>
            </div>
        </div>

        <div className='sidebare_bottom'>
            <p>Recent</p>
            {recentItem('reactjs')}
            {recentItem('softwareengineering')}
            {recentItem('programming')}
            {recentItem('frontenddev')}
        </div>
    </div>
  )
}
