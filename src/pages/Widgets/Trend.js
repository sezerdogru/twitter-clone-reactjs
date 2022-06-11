import React from 'react';
import '../../styles/Trend.scss'
import MoreHorizIcon   from '@mui/icons-material/MoreHoriz';

function Trend({title,count}){
  return ( 
      <div className="trend">
      	<div className="trend__left">
          <span>Trending in Turkey</span>
          <h2>#{title}</h2>
          <span>{count} Tweets</span>  
        </div> 
        <MoreHorizIcon />  
      </div>  
  )
}

export default Trend;