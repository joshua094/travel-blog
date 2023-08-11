


export default function Main(props) {
    return (
        
        <div className="main">
            <div className="main-image">
                <img src={props.img} alt="location images" className="main-image-image" />
            </div>
            <div className="main-desc">
                <div className="location">
                    <img src={props.locationIcon} alt="location" className="location-icon" />
                    <p className="country">{props.location}</p>
                    <p className="maps-link">View on Google Maps</p>
                </div>
                <h1 className="place">{props.place}</h1>
                <p className="day">{props.day}</p>
                <p className="description">{props.description}</p>
            </div>
            <hr className="line" />
        </div>
        
        
    )
}