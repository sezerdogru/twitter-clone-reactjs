import React from 'react';
import './Tweetbox.css'
import {Avatar, Button} from "@mui/material"

function Tweetbox   ( )  {
  return (
    <div className="tweetbox">
      <form>



<div className="tweetbox__input">
  <Avatar src="https://pbs.twimg.com/profile_images/1506021070666612737/9nYOxDqS_400x400.jpg" />
  <input 
    placeholder="What's happening?"
    type="text"
  />
</div>
<input 
    placeholder="Optional: Enter image url"
    className="tweetbox__imageInput"
    type="text"
  />
  <Button className="tweetbox__tweetButton">Tweet</Button>




      </form>


    </div>
  )
}

export default Tweetbox;