import './WeatherInfo.css'

const WeatherInfo = ({ weather }) => {
    return (
        <div className='weather-info'>
            <div className='weather-info-container'>
                <div className='weather-info-city'>
                    {weather?.location.name}
                </div>
                <div className='weather-info-country'>
                    {weather?.location.country}
                </div>
                <div>
                    <img className='weather-info-img' src={`http:${weather?.current.condition.icon}`} alt={weather?.current.condition.text} />
                </div>
                <div>
                    <p className='weather-info-condition'>{weather?.current.condition.text}</p>
                    <p className='weather-info-current'>{weather?.current.temp_c}º</p>
                </div>
            </div>
            <div>
                <iframe title="map" src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15057.534307180755!2d${weather?.location.lon}5!3d${weather?.location.lat}5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smx!4v1651103744472!5m2!1sen!2smx`} width="400" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}

export default WeatherInfo