import React from 'react'
import FormatNumber from '../utils/FormatNumber'
import ImageHero from '../assets/images/img-hero.jpg'
import ImageFrame from '../assets/images/img-hero-frame.jpg'
import IconTraveler from '../assets/icons/ic_traveler.svg'
import IconTreasure from '../assets/icons/ic_treasure.svg'
import IconCities from '../assets/icons/ic_cities.svg'
import Button from '../elements/Button'
import Fade from 'react-reveal/Fade';


export default function Hero(props) {

    function showMostPicked() {
        window.scrollTo({
            top: props.refMostPicked.current.offsetTop - 3,
            behavior: "smooth"
        });
    }

    return (
        <Fade bottom>
        <section className="container pt-4">
            <div className="row align-items-center">
                <div className="col-auto pr-5" style={{ width: 530 }}>
                    <h1 className="font-weight-bold line-height-1 mb-3">
                        Forget Busy Work <br />
                        Start Next Vacation
                    </h1>
                    <p className="mb-4 font-weight-light text-gray-500 w-75" style={{lineHeight:"170%"}}>
                        We provide what you need to enjoy your
                        holiday with family. Time to make another
                        memorable moments.
                    </p>
                    <Button className="btn px-5" hasShadow isPrimary onClick={showMostPicked}>
                        Show Me Now
                    </Button>
                    <div className="row" style={{marginTop:80}}>
                        <div className="col-auto" style={{marginRight:35}}>
                            <img width="36" height="36" src={IconTraveler} alt={`${props.data.travelers} Travelers`}/>
                            <h6 className="mt-3">
                                {FormatNumber(props.data.travelers)} &nbsp;
                                <span className="font-weight-light text-gray-500">
                                     Travelers
                                </span>
                            </h6>
                        </div>
                        <div className="col-auto" style={{marginRight:35}}>
                            <img width="36" height="36" src={IconTreasure} alt={`${props.data.treasures} Treasure`}/>
                            <h6 className="mt-3">
                                {FormatNumber(props.data.treasures)} &nbsp;
                                <span className="font-weight-light text-gray-500">
                                     Treasure
                                </span>
                            </h6>
                        </div>
                        <div className="col-auto">
                            <img width="36" height="36" src={IconCities} alt={`${props.data.cities} Cities`}/>
                            <h6 className="mt-3">
                                {FormatNumber(props.data.cities)} &nbsp;
                                <span className="font-weight-light text-gray-500">
                                     Cities
                                </span>
                            </h6>
                        </div>
                    </div>
                </div>
                <div className="col-6 pl-5">
                    <div style={{width:520, height:410}}>
                        <img src={ImageHero} alt="Room with couches" style={{margin:"-30px 0 0 -30px", zIndex:1}} className="img-fluid position-absolute"/>
                        <img src={ImageFrame} alt="Room with couches frame" style={{margin:"0 15px -15px 0"}} className="img-fluid position-absolute"/>
                    </div>
                </div>
            </div>
            </section>
        </Fade>
    )
}
