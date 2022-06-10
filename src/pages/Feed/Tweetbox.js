import React, {useState} from 'react';
import './Tweetbox.css'
import {Avatar, Button} from "@mui/material"

function Tweetbox ({setTweet}) {

  const [tweetText,setTweetText] = useState("")
  const [imageURL, setImageURL] = useState("")

  const newTweet = () => {
    const tweet = {
      displayName:"Mike Gunter",
      username:"mikegunter",
      verified: false ,
      text:tweetText,
      image: imageURL,
      avatar:"https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
      }
      setTweet(tweet)
      setTweetText("")
      setImageURL("")
  }

  return (
    <div className="tweetbox">
      <form> 
        <div className="tweetbox__input">
          <Avatar src="https://pbs.twimg.com/profile_images/1506021070666612737/9nYOxDqS_400x400.jpg" />
          <input 
            placeholder="What's happening?"
            onChange={(e) => setTweetText(e.target.value)}
            value={tweetText}
            type="text"
          />
        </div>
        <input 
            placeholder="Optional: Enter image url"
            className="tweetbox__imageInput"
            onChange={(e) => setImageURL(e.target.value)}
            value={imageURL}
            type="text"
          />
      <Button className="tweetbox__tweetButton" onClick={newTweet}>Tweet</Button> 
      </form> 
    </div>
  )
}

export default Tweetbox;