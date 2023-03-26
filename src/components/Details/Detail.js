import React, { useState } from 'react'
import './Detail.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Detail = ({ search, setsearch, post, setpost, loading, setLoading }) => {
    const handlechange = (e) => {
        setsearch(e.target.value)
    }
    const handlesearch = async (event) => {
        event.preventDefault();
        setLoading(true)
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=b65275e1763f274c5b52897cabee1f6d&units=metric`
            );
            const data = await response.json();
            console.log(data);
            setpost(data)
        } catch (error) {
            console.error(error);
        }
        setLoading(false)
    };
    return (
        <div className='details'>
            <div className='detail-div'>
                <div className='detail-left-div'>
                    <input type='text' value={search} placeholder='Search!...' onChange={(e) => { handlechange(e) }}  ></input>
                    <button onClick={handlesearch} ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg></button>
                </div>
                <div className='detail-right-div'>
                    {
                        loading ? (<p>loading</p>) :
                            (
                                <div>
                                    <p className='heading'>Weather details</p>
                                    <p className='weather-details'>Humidity:{post.main.humidity}</p>
                                    <p className='weather-details'>Pressure:{post.main.pressure}</p>
                                    <p className='weather-details'>Wind Speed:{post.wind.speed}</p>
                                    <p className='weather-details'>Clouds:{post.clouds.all}</p>
                                </div>
                            )
                    }
                </div>
                <hr></hr>
                <div>
                    <p className='heading'>My favorite Places</p>
                    <ul type='none'>
                        <li>Canada</li>
                        <li>India</li>
                        <li>Spain</li>
                        <li>New York</li>
                        <li>Ireland</li>
                        <li>Netherland</li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Detail
