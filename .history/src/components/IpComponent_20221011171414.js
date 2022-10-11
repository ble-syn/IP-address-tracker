import {useState} from "react"
import {ReactComponent as Arrow} from '../images/icon-arrow.svg'
import {ReactComponent as Location} from '../images/icon-location.svg'



function IpComponent (){
    const [IpAddress, setIpAddress] = useState("192.212.174.101")
    const [location, setLocation] = useState("Brooklyn, NY 10001")
    const [country, setCountry] = useState("USA")
    const [timezone, setTimezone] = useState("UTC-05:00")
    const [Isp, setIsp] = useState("SpaceX Starlink")
    const [lat, setLat] = useState("51.505");
    const [lng, setLng] = useState("-0.09");
    // const [loading, setLoading] = useState(false)
    


    const getIpInfo = async(e) => {
        e.preventDefault();

        let url = "https://geo.ipify.org/api/v2/country,city;
        let api_Key = process.env.REACT_APP_API_KEY;
        
        let fetchData =  await fetch(`${url}?apiKey=${api_Key}&ipAddress=${IpAddress}`)
        let data = await fetchData.json()
        console.log(data)

        setCountry(data.location.country); 
        setLocation(data.location.city);
        setTimezone(data.location.timezone);
        setIsp(data.isp);
        setLat(data.location.lat);
        setLng(data.location.lng);

    }

    const getIp = (event) => {
        event.preventDefault()
        setIpAddress(event.target.value)   
    }

    
    return (
    <>
    <section className="firstsection">
        <div className="ip-bg">
            <h1 className="heading">IP ADDRESS TRACKER</h1>

            <form onSubmit={getIpInfo}  className="search-bar" >
                <input onChange={getIp} className="search-bar-input" type="text" placeholder="Search for any IP address or domain" />
                <button className="search-bar-btn"> <Arrow /> </button>
            </form>

        </div> 

    </section>        
        <div className="ip-details-card">
            <div>
                <p className="ip-details-para">IP ADDRESS</p>
                <h2>{IpAddress ? IpAddress : "192.212.174.101"}</h2> 
            
            </div>
            <hr />
            <div>
                <p className="ip-details-para">LOCATION</p>
                <h2>{country}{location}</h2>
            </div>
            <hr />
            <div>
                <p className="ip-details-para">TIMEZONE</p>
                <h2>{timezone}</h2>
            </div>
            <hr />
            <div>
                <p className="ip-details-para">ISP</p>
                <h2>{Isp}</h2>
                
            </div>
            

        </div>
    <section className="mapsection">
        <Location />
    </section>
      
    </>
    )
}

export default IpComponent;