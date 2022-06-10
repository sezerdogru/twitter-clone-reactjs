import React from "react"
import './Widgets.css'
import Trend from "./Trend"
import SearchIcon from '@mui/icons-material/Search';

function Widgets() {
	return(
		<div className="widgets">
			<div className="widgets__input">
				<SearchIcon />
				<input
					type="text"
					placeholder="Search Twitter"
				/>
			</div>
			<div className="widgets__trends">
				<h2>Trends for you</h2>
				<Trend title="MarkZuckerberg" count="5,100" />
				<Trend title="İzmir" count="1K" />
				<Trend title="Slipknot" count="1,811" />
				<Trend title="RockMusic" count="10K" />
				<Trend title="Life" count="15K" />
				<Trend title="Balance" count="4,155" />
			</div>


		</div>
	)
}

export default Widgets