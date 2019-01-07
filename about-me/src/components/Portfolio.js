import React from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import Project from "./Project";

const Portfolio = () => {
    return (
        <section className='portfolio'>
            <div className='sectionTitle portfolioTitle'>Portfolio</div>
            <div className='slider'>
                {[{ title: 'Stolby', type: 'iOS App', source: { title: 'AppStore', link: 'https://itunes.apple.com/ru/app/stolby/id1033572573?mt=8' } },
                { title: 'Tatysev', type: 'iOS App', source: { title: 'AppStore', link: 'https://itunes.apple.com/ru/app/tatysev/id1071384712?l=en&mt=8' } },
                { title: 'Webinar', type: 'iOS App', source: { title: 'AppStore', link: 'https://itunes.apple.com/ru/app/webinar/id1050809427?mt=8' } },
                { title: 'Anna.Money', type: 'iOS App', source: { title: 'AppStore', link: 'https://itunes.apple.com/gb/app/anna-business/id1333008275ƒ' } },
                { title: 'Psorimetr', type: 'iOS App', source: { title: 'AppStore', link: 'https://itunes.apple.com/ru/app/psorimetr/id1222487523?mt=8' } },
                { title: 'BeaApp', type: 'iOS App', source: { title: 'AppStore', link: 'https://itunes.apple.com/ru/app/beapp/id1102359793?mt=8' } }].map((i) =>
                    (<Project key={i.title} title={i.title} type={i.type} />))}
            </div>
        </section>
    )
}

export default Portfolio 