import React from 'react';
import '../../styles/Trend.scss'

function Trend({title,count}){
  return (
    <div className="trend">
    	<span>Trending in Turkey</span>
    	<h2>#{title}</h2>
    	<span>{count} Tweets</span>

    </div>
  )
}

export default Trend;