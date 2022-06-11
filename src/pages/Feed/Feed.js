import React from "react"
import '../../styles/Feed.scss'
import Tweetbox from "./Tweetbox"
import Post from "./Post"

function Feed() {

	const tweets = [
	{
		displayName:"Sezer Doğru",
		username:"sezerdogru",
		verified: true ,
		comment:3,
		fav:5,
		rt:2,
		text:"Hello",
		image:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
		avatar:"https://pbs.twimg.com/profile_images/1506021070666612737/9nYOxDqS_400x400.jpg",
	},
	{
		displayName:"Nick Shelton",
		username:"nick",
		verified: false ,
		comment:3,
		fav:5,
		rt:2,
		text:"This is amazing",
		image:"https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
		avatar:"https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
	},
	{
		displayName:"Sezer Doğru",
		username:"sezerdogru",
		verified: true ,
		comment:3,
		fav:5,
		rt:2,
		text:"Hello",
		image:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
		avatar:"https://pbs.twimg.com/profile_images/1506021070666612737/9nYOxDqS_400x400.jpg",
	},
	{
		displayName:"Nick Shelton",
		username:"nick",
		verified: false ,
		text:"This is amazing",
		comment:3,
		fav:5,
		rt:2,
		image:"https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
		avatar:"https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
	},
	{
		displayName:"Sezer Doğru",
		username:"sezerdogru",
		verified: true ,
		text:"Hello",
		comment:3,
		fav:5,
		rt:2,
		image:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
		avatar:"https://pbs.twimg.com/profile_images/1506021070666612737/9nYOxDqS_400x400.jpg",
	},
	{
		displayName:"Nick Shelton",
		username:"nick",
		verified: false ,
		text:"This is amazing",
		comment:3,
		fav:5,
		rt:2,
		image:"https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
		avatar:"https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
	},
	{
		displayName:"Sezer Doğru",
		username:"sezerdogru",
		verified: true ,
		text:"Hello",
		comment:3,
		fav:5,
		rt:2,
		image:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
		avatar:"https://pbs.twimg.com/profile_images/1506021070666612737/9nYOxDqS_400x400.jpg",
	},
	{
		displayName:"Nick Shelton",
		username:"nick",
		verified: false ,
		text:"This is amazing",
		comment:3,
		fav:5,
		rt:2,
		image:"https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
		avatar:"https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
	},
	] 
	 
	return(
		<div className="feed">
			<div className="feed__header">
				<h2>Home</h2>
			</div> 
			<Tweetbox />
			<div className="space" />

			{tweets.map((post,index) => (
				<Post 
				key={index}
				displayName={post.displayName}
				username={post.username}
				verified={post.verified}
				text={post.text}
				comment={post.comment}
				fav={post.fav}
				rt={post.rt}
				image={post.image}
				avatar={post.avatar}
			/>
			))}
		</div>
	)
}

export default Feed