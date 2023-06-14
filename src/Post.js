import React from 'react'
import './Post.css'
import { Avatar } from '@material-ui/core'
import InputOption from './InputOption'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import CommentIcon from '@material-ui/icons/Comment';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import { forwardRef } from 'react';

const Post =forwardRef(({name, description, message, photoUrl},ref)=> {
  return (
    <div ref={ref} className='post'>
        <div className='post_header'>
            <Avatar src={photoUrl}>{name[0]}</Avatar>
            <div className='post_info'>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
        <div className='post_body'>
            <p>{message}</p>
        </div>

        <div className='post_buttons'>
            <InputOption Icon={ThumbUpIcon} title='Like' color='grey' />
            <InputOption Icon={CommentIcon} title='Comment' color='grey' />
            <InputOption Icon={ShareOutlinedIcon} title='Share' color='grey' />
            <InputOption Icon={SendOutlinedIcon} title='Send' color='grey' />

        </div>
    </div>
  )
})

export default  Post;