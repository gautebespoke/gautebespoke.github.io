function initMap(){var e={zoom:16,mapTypeControl:!1,streetViewControl:!1,center:new google.maps.LatLng(24.165322,120.634598),styles:[{featureType:"all",elementType:"all",stylers:[{hue:"#ff0000"},{saturation:-100},{lightness:-30}]},{featureType:"all",elementType:"labels.text.fill",stylers:[{color:"#ffffff"}]},{featureType:"all",elementType:"labels.text.stroke",stylers:[{color:"#353535"}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#656565"}]},{featureType:"poi",elementType:"geometry.fill",stylers:[{color:"#505050"}]},{featureType:"poi",elementType:"geometry.stroke",stylers:[{color:"#808080"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#454545"}]},{featureType:"transit",elementType:"labels",stylers:[{hue:"#000000"},{saturation:100},{lightness:-40},{invert_lightness:!0},{gamma:1.5}]}]},t=document.getElementById("map"),l=new google.maps.Map(t,e),o={size:new google.maps.Size(64,64),origin:new google.maps.Point(0,0),anchor:new google.maps.Point(30,28)},a=new google.maps.Marker({position:new google.maps.LatLng(24.165322,120.634598),map:l,icon:o,title:"Gaute!"})}google.maps.event.addDomListener(window,"load",init);