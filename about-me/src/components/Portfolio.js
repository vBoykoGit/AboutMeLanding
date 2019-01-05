import React from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import Project from "./Project";

const Portfolio = () => {
    return (
        <section className='portfolio'>
            <div className='sectionTitle portfolioTitle'>Portfolio</div>
            <div className='slider'>
                {[{ title: 'Stolby', type: 'iOS App' }, { title: 'Tatysev', type: 'iOS App' }, { title: 'Webinar', type: 'iOS App' }, { title: 'Anna.Money', type: 'iOS App' }, { title: 'Psorimetr', type: 'iOS App' }, { title: 'BeaApp', type: 'iOS App' }].map((i) =>
                    (<Project key={i.title} title={i.title} type={i.type} />))}
            </div>
        </section>
    )
}

export default Portfolio 