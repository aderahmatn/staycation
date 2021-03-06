import React, { Component } from 'react'
import Header from '../parts/Header'
import LandingPageData from '../json/landingPage.json'
import Hero from '../parts/Hero'
import MostPicked from '../parts/MostPicked'
import Categories from 'parts/Categories'
import Testimony from 'parts/Testimony'
import Footer from 'parts/Footer'


export default class LandingPage extends Component {
    constructor(props){
        super(props);
        this.refMostPicked = React.createRef();
    }
    render() {
        return (
            <>
             <Header {...this.props}/>
             <Hero refMostPicked={this.refMostPicked} data={LandingPageData.hero}/>
             <MostPicked refMostPicked={this.refMostPicked} data={LandingPageData.mostPicked}/>
             <Categories data={LandingPageData.categories}/>
             <Testimony data={LandingPageData.testimonial} />
             <Footer/>
            </>
        )
    }
}
