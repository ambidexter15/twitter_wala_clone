import { Avatar,Button } from '@material-ui/core';
import React from 'react';
import "./TweetBox.css";


function TweetBox() {
    return (
        <div className="tweetBox">
        <form>
        <div className="tweetBox__input">
        <Avatar src="https://classroom.pepcoding.com/images/logo.png" />
          <input placeholder="What's happening?" type="text" />
        </div>
        <input
        className='tweetBox__imageInput'
        placeholder='Enter image URL' type ="text"
        />
        <Button className ="tweetBox__tweetButton">Tweet</Button>     
        </form>
        </div>
    );
}

export default TweetBox;
