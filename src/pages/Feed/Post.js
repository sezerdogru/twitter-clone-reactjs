import React from 'react';
import '../../styles/Post.scss' 
import { Avatar } from "@mui/material";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";

const Post  =   
  ({ displayName, username, verified, comment, fav,rt,text, image, avatar } ) =>  {
  return (
    <div className="post">

    	<div className="post__avatar">
    		<Avatar src={avatar} />
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
            <div className="comment"><ChatBubbleOutlineIcon fontSize="small" /> {comment}</div>
            <div className="rt"><RepeatIcon fontSize="small" /> {rt}</div>
            <div className="fav"><FavoriteBorderIcon fontSize="small" /> {fav}</div>
            <div className="share"><PublishIcon fontSize="small" /></div>
          </div>
         


    </div>
    </div> 
  )

}


export default Post;