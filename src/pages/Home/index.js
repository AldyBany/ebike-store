import React from 'react'
import Hero from './sections/Hero'
import Categories from './sections/Categories'
import Arrivals from './sections/Arrivals'
import Special from './sections/Special'
import  News from './sections/News'

const Home = () => {
    return (
        <div>
            <Hero/>
            <Categories/>
            <Arrivals/>
            <Special/>
            <News/>
        </div>
    )
}

export default Home
