import './Weather.css'
import WeatherForm from './WeatherForm'
import WeatherInfo from './WeatherInfo'
import { useState, useEffect } from 'react'

const Weather = () => {

    const [weather, setWeather] = useState(null)

    useEffect(() => {
        loadInfo();
    }, [])

    useEffect(() => {
        document.title = "Weather | " + weather?.location?.name ?? "";
    }, [weather])

    async function loadInfo(city = 'london') {
        try {
            const request = await fetch(`${import.meta.env.VITE_APP_URL_WEATHER}&key=${import.meta.env.VITE_APP_KEY_WEATHER}&q=${city}`)

            const json = await request.json();

            setWeather(json);

            console.log(json)

        } catch (error) {
            console.error(error);
        }
    }

    function handleChangeCity(city) {
        setWeather(null);
        loadInfo(city);
    }

    return (
        <div className='weather-container'>
            <WeatherForm onChangeCity={handleChangeCity} />
            <div>
                <WeatherInfo weather={weather}/>
            </div>
        </div>
    )
}

export default Weather