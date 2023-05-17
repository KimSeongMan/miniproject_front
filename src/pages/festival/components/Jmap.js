/* global kakao */

import React, { useEffect } from 'react'

const Jmap = () => {
  useEffect(()=>{
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(35.1491389, 128.6603389),
      level: 8
    };
    
    var map = new kakao.maps.Map(container, options);
    var markerPosition  = new kakao.maps.LatLng(35.1491389, 128.6603389); 
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

export default Jmap;