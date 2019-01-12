import React, { Component } from "react";
import Project from "./Project";
import Slider from 'react-slick'
import '/Users/admin/Git/AboutMeLanding/about-me/node_modules/slick-carousel/slick/slick.css'
import '/Users/admin/Git/AboutMeLanding/about-me/node_modules/slick-carousel/slick/slick-theme.css'

const ProjectsSlider = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>
            <h2> Responsive </h2>
            <Slider {...settings}>
                {[{ title: 'Stolby', type: 'iOS App', source: { title: 'AppStore', link: 'https://itunes.apple.com/ru/app/stolby/id1033572573?mt=8' } },
                { title: 'Tatysev', type: 'iOS App', source: { title: 'AppStore', link: 'https://itunes.apple.com/ru/app/tatysev/id1071384712?l=en&mt=8' } },
                { title: 'Webinar', type: 'iOS App', source: { title: 'AppStore', link: 'https://itunes.apple.com/ru/app/webinar/id1050809427?mt=8' } },
                { title: 'Anna.Money', type: 'iOS App', source: { title: 'AppStore', link: 'https://itunes.apple.com/gb/app/anna-money-business-account/id1333008275?mt=8' } },
                { title: 'Psorimetr', type: 'iOS App', source: { title: 'AppStore', link: 'https://itunes.apple.com/ru/app/psorimetr/id1222487523?mt=8' } },
                { title: 'BeaApp', type: 'iOS App', source: { title: 'AppStore', link: 'https://itunes.apple.com/ru/app/beapp/id1102359793?mt=8' } }].map((i) =>
                    (<Project key={i.title} title={i.title} type={i.type} source={i.source} />))}
            </Slider>
        </div>
    );
}

export default ProjectsSlider