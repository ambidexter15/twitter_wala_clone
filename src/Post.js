import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Post.css";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function Post({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
}) {
    return (
    <div className="post">
    <div className="post__avatar">
    <Avatar src="https://classroom.pepcoding.com/images/logo.png" />  
    </div>    
    <div className="post__body">
    <div className='post__header'>
    <div className ="pose__headerText">
    <h3>
    Akanksha Gupta {" "}
    <span>
    <VerifiedUserIcon className="post__badge" />@ambidexter
    </span>
    </h3>
    </div>
    <div className='post__headerDescription'>
    <p> I challenge you to build a Twitter Clone </p>
    </div>
    </div>
    <img 
    src="https://media0.giphy.com/media/gUD7as8GzwfbG/giphy_s.gif"/>
    
    <div className='post__footer'>
    <ChatBubbleOutlineIcon fontSize="small"/>
    <RepeatIcon fontSize="small" />
    <favoriteBorderIcon fontSize="small"/>
    <PublishIcon fontSize="small"/>
    
    </div>
    </div>
    </div> 
    ); 
    
}

export default Post;
