import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import img from '../../images/images.png'

import './Home.css'

const Home = ({search,post,setpost,loading,setLoading}) => {

    const [icon,seticon] = useState(null);
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;
            console.log(position.coords);
            setLoading(true)
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=b65275e1763f274c5b52897cabee1f6d&units=metric`
            );
            const data = await response.json();
            console.log(data);
            setpost(data);
            seticon(data.weather[0].icon)
            setLoading(false);
        })

    }, [])
    

    return (
        <div className='home'>
            <div className='home-content'>
                <div className='home-top-content'>
                    <img src={img} width='70px'></img>
                    <p>WeatherUp.com</p>
                </div>
                <div className='home-bot-content'>
                    {
                        loading ? (<p>loading</p>) :
                            (
                                <div className='home-bot-content-div'>
                                    <div className='temp'>{post.main.temp} &#xb0;C</div>
                                    <div className='location'>
                                        <p>{post.name}</p>
                                        <p>{post.weather[0].description}</p>
                                    </div>
                                    <img src={`http://openweathermap.org/img/w/${icon}.png`} width='90px'></img>
                                </div>

                            )
                    }
                </div>
            </div>
        </div>
    )
}

export default Home
