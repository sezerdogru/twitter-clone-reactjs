import React from "react"
import '../../styles/Sidebar.scss'
import SidebarOption from'./SidebarOption'
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon  from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon  from '@mui/icons-material/BookmarkBorder';
import ListAltIcon  from '@mui/icons-material/ListAlt';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import MoreHorizIcon   from '@mui/icons-material/MoreHoriz';
import {Button} from "@mui/material"


function Sidebar() {


	const sidebarOptions = [
	{text:"Home", Icon:HomeIcon, active:true},
	{text:"Explore", Icon:TagIcon},
	{text:"Notifications ", Icon:NotificationsNoneIcon},
	{text:"Messages", Icon:MailOutlineIcon},
	{text:"Bookmarks", Icon:BookmarkBorderIcon},
	{text:"Lists", Icon:ListAltIcon},
	{text:"Profile", Icon:PermIdentityOutlinedIcon},
	{text:"More", Icon:MoreHorizIcon},
	]


	return(
		<div className="sidebar">
 
		<TwitterIcon className="sidebar__twitterIcon" />
		{sidebarOptions.map((sidebarOption,index) => (
			<SidebarOption key={index} text={sidebarOption.text} Icon={sidebarOption.Icon} active={sidebarOption.active} />
		))}

		<Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>

		</div>
	)
}

export default Sidebar