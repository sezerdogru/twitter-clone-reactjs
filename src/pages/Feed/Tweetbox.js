import React from 'react';
import {Avatar, Button} from "@mui/material"

import './Tweetbox.scss'

function Tweetbox () { 
  return (
    <div className="tweetbox">
      <form> 
        <div className="tweetbox__input">
          <Avatar
            src="https://pbs.twimg.com/profile_images/1506021070666612737/9nYOxDqS_400x400.jpg" 
            sx={{ width: 50, height: 50 }}
          />
          <input 
            placeholder="What's happening?"  
            type="text"
          />
        </div>
      <Button className="tweetbox__tweetButton">Tweet</Button> 
      </form> 
    </div>
  )
}

export default Tweetbox;