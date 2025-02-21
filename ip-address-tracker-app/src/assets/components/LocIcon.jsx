import L from "leaflet"
import LocIcon from "../images/icon-location.svg"

export default L.icon ({
    iconSize: [32, 44],    
    iconAnchor: [10, 40],
    popupAnchor: [8, -40],
    iconUrl: LocIcon,  
})