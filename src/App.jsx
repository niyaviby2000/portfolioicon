import React from 'react'
import Nav from './Nav'
import Hero from './Hero'
import Aboutme from './Aboutme'
import Skills from './Skills'
import Qualification from './Qualification'
import Service from './Service'
import Projects from './Projects'
import Footer from './Footer'

Footer



function App() {

  const user={
    "name":"Niya",
    "degree":"BTECH",
    "phone":"9847010945",
    "dob":"26/12/2000",
    "experience":"1year",
    "email":"niyaviby@gmail.com",
  }

  const skillsets=[
    {
      "name":"Python",
      "percentage":"90%",
    },
    {
      "name":"JS",
      "percentage":"75%",
    },
    {
      "name":"FrontEnd",
      "percentage":"85%"
    },
    {
      "name":"Django",
      "percentage":"88%"
    },
    {
      "name":"DRF",
      "percentage":"80%"
    }
]
  return (
    <div>

      <Nav></Nav>
      <Hero></Hero>
      <Aboutme user={user}></Aboutme>
      <Skills skillsets={skillsets}></Skills>
      <Qualification></Qualification>
      <Service></Service>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  )
}

export default App


  