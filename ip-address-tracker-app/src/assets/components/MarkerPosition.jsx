import { useEffect } from 'react'
import {Marker, Popup, useMap} from 'react-leaflet'
import LocIcon from './LocIcon'

const MakerPosition = ({locData}) => {

    const map = useMap()
    const position = [locData.location.lat, locData.location.lng];

    useEffect (() => {
        map.flyTo(position, 13, {
        animation: true
        })
    },[map, position])

    return (
        <Marker icon={LocIcon} position={position}>
            <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
        </Marker>
    )

}
export default MakerPosition;