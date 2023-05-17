/* global kakao */

import React, { useEffect } from 'react'

const Smap = () => {
  useEffect(()=>{
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(37.4064278, 126.6338237),
      level: 9
    };
    
    var map = new kakao.maps.Map(container, options);
    var markerPosition  = new kakao.maps.LatLng(37.4064278, 126.6338237); 
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

export default Smap;