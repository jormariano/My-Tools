import './WeatherForm.css'
import { useState } from "react"

const WeatherForm = ({onChangeCity}) => {

    const [city, setCity] = useState('')

    function onChange(e) {
        const value = e.target.value;

        if (value !== '') {
            setCity(value);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();

        onChangeCity(city);
    }

    return (
        <form className='weather-form-container' onSubmit={handleSubmit}>
            <label>City:</label> <input id='city' type="text" onChange={onChange} />
        </form>
    )
}

export default WeatherForm