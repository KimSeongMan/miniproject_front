/* global kakao */

import React, { useEffect } from 'react'

const Jemap = () => {
  useEffect(()=>{
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(33.36733303, 126.3571266),
      level: 9
    };
    
    var map = new kakao.maps.Map(container, options);
    var markerPosition  = new kakao.maps.LatLng(33.36733303, 126.3571266); 
    var marker = new kakao.maps.Marker({
      position: markerPosition
    });
    marker.setMap(map);

    }, [])

    return (
        <div>
        	<div id="map" style={{width:"700px", height:"350px"}}></div> 
        </div>
    )
}

export default Jemap;