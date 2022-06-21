import React from 'react';
import { Avatar } from "@mui/material";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";

import './Post.scss' 

const Post = ({post, index}) => {
  const { displayName, username, verified, comment, fav,rt,text, image, avatar } = post
  return (
    <div className="post"> 
    	<div className="post__avatar">
    		<Avatar src={avatar} sx={{ width: 50, height: 50 }} />
    	</div> 
    	<div className="post__body">
    		<div className="post__header">
            <div className="post__headerText">
              <h3>
                {displayName}{" "}
                <span className="post__headerSpecial">
                  {verified && <VerifiedUserIcon className="post__badge" />} @
                  {username}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>
           <img src={image} alt="" />
          <div className="post__footer">
            <div className="comment">
              <div>
                <ChatBubbleOutlineIcon fontSize="small" />{comment} 
              </div>
            </div>
            <div className="rt">
              <div>
                <RepeatIcon fontSize="small" />{rt}
              </div>
            </div> 
            <div className="fav">
              <div>
                <FavoriteBorderIcon fontSize="small" />{fav}
              </div>
            </div>
            <div className="share">
              <div>
                <PublishIcon fontSize="small" />
              </div>
            </div>
          </div> 
    </div>
    </div> 
  )

}


export default Post;