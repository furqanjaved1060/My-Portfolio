import { useEffect, useState } from 'react'
import { MapContainer, TileLayer} from 'react-leaflet'
import './App.css'
import "leaflet/dist/leaflet.css"
import Arrow from "./assets/images/icon-arrow.svg"
import MakerPosition from './assets/components/MarkerPosition'

function App() {

  const [ipAddress, setipAddress] = useState("");
  const [locData, setlocData] = useState(null);

  useEffect(() => {
    try {
      const apiData = async () => {
        const res = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_RZmTHy8TeuBSJUeS5ESNTZYgE906a&ipAddress`);
        const data = await res.json();
        setlocData(data);
        console.log(data);
      }
      apiData();
    }catch (error) {
      console.trace(error);
      console.log(error)
    }
  }, [])

  const checkIpAddress = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi
  const checkDomain = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+/

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const apiData = async () => {
      const res = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_RZmTHy8TeuBSJUeS5ESNTZYgE906a&${
        checkIpAddress.test(ipAddress) ? `ipAddress=${ipAddress}` : checkDomain.test(ipAddress) ? `domain=${ipAddress}` : `ipAddress=${locData.ip}`
      }`);
      const data = await res.json();
      setlocData(data);
      if ((checkIpAddress.test(ipAddress)==false && checkDomain.test(ipAddress)==false)) {
        document.querySelector(".input-btn-container").classList.add("error");
        setTimeout(() => {
          document.querySelector(".input-btn-container").classList.remove("error");
        }, 2000);
      }
      setipAddress("");
      console.log(data);
    }
    apiData()
  }
  
  if (locData) {
    return (
      <>
      <main className='flex-column'>
        <div className="bg-image">
          <div className='h-input-btn-container flex-column'>
            <h1>IP Address Tracker</h1>
            <form className="input-btn-container flex-row" onSubmit={(e) => handleFormSubmit(e)}>
              <input className='ip-input' 
              type="text" 
              required
              autoComplete='off'
              placeholder='Search for any IP address or domain'
              value={ipAddress} 
              onChange={(e) => setipAddress(e.target.value)}
              />
              <button className='arrow-btn flex-row'><img src={Arrow} alt="" /></button>
            </form>
          </div>
        </div>
        <div className='info-container'>
          <div className='info'>
            <p className='info-1'>ip address</p>
            <p className='info-2'>{locData.ip}</p>
          </div>
          <div className='info'>
            <p className='info-1'>location</p>
            <p className='info-2'>{locData.location.city}, {locData.location.region ? `${locData.location.region}, ` : ""}{locData.location.country} {locData.location.postalCode}</p>
          </div>
          <div className='info'>
            <p className='info-1'>timezone</p>
            <p className='info-2'>UTC{locData.location.timezone}</p>
          </div>
          <div className='info'>
            <p className='info-1'>ISP</p>
            <p className='info-2'>{locData.isp}</p>
          </div>
        </div>
        <div className='map-container'>
          <MapContainer center={[locData.location.lat, locData.location.lng]} zoom={13} scrollWheelZoom={true} style={{width:"100%", height:"100%"}}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MakerPosition 
              locData = {locData}
            />
         </MapContainer >
        </div>
      </main>
      </>
    )
  }
  // else {error}
}

export default App
