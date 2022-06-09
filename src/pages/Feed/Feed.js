import React from "react"
import './Feed.css'
import Tweetbox from "./Tweetbox"
import Post from "./Post"

function Feed() {
	return(
		<div className="feed">
			<div className="feed__header">
				<h2>Home</h2>
			</div> 
			<Tweetbox />

			<Post 
				displayName="Sezer Doğru"
				username="sezerdogru"
				verified={true}
				text="yazı"
				image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
				avatar="https://pbs.twimg.com/profile_images/1506021070666612737/9nYOxDqS_400x400.jpg"
			/>
		</div>
	)
}

export default Feed