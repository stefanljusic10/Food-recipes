import React from 'react'
import Welcome from './Welcome'
import Categories from './Categories'
import AboutUs from './AboutUs'
import Contact from './Contact'
import { HomeItem } from '../styles/HomeItem.styled'

function Home() {
  return (
    <HomeItem>
      <Welcome />
      <Categories />
      <AboutUs />
      <Contact />
    </HomeItem>
  )
}

export default Home
