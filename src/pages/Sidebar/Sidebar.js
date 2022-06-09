import React from "react"
import './Sidebar.css'
import SidebarOption from'./SidebarOption'
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon  from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon  from '@mui/icons-material/BookmarkBorder';
import ListAltIcon  from '@mui/icons-material/ListAlt';
import PermIdentityIcon  from '@mui/icons-material/PermIdentity';
import MoreHorizIcon   from '@mui/icons-material/MoreHoriz';
import {Button} from "@mui/material"


function Sidebar() {


	const sidebarOptions = [
	{text:"Home", Icon:HomeIcon, active:true},
	{text:"Search", Icon:SearchIcon},
	{text:"Notifications ", Icon:NotificationsNoneIcon},
	{text:"Messages", Icon:MailOutlineIcon},
	{text:"Bookmarks", Icon:BookmarkBorderIcon},
	{text:"Lists", Icon:ListAltIcon},
	{text:"Profile", Icon:PermIdentityIcon},
	{text:"More", Icon:MoreHorizIcon},
	]


	return(
		<div className="sidebar">
 
		<TwitterIcon className="sidebar__twitterIcon" />
		{sidebarOptions.map(sidebarOption => (
			<SidebarOption text={sidebarOption.text} Icon={sidebarOption.Icon} active={sidebarOption.active} />
		))}

		<Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>

		</div>
	)
}

export default Sidebar