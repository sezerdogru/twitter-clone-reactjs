 import React from "react"
import '../../styles/SidebarOption.scss' 


function SidebarOption({ active, text, Icon }) {
	return(
		<div className="sidebarOption"> 
			<div className={`sidebarOption__row ${active && 'sidebarOption__row--active'}`}> 
				<Icon />
				<h2>{text}</h2>
			</div>
		</div>
	)
}

export default SidebarOption