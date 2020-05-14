import React, { Component } from 'react'
import Header from '../parts/Header'
import LandingPageData from '../json/landingPage.json'
import Hero from '../parts/Hero'

export default class LandingPage extends Component {
    render() {
        return (
            <>
             <Header {...this.props}>
             </Header> 
             <Hero data={LandingPageData.hero}/>
            </>
        )
    }
}
