import React from "react";
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css";

const Portfolio = () => {
    let state = {
        items: [{ title: 'Stolby iOS App' }, { title: 'Tatysev iOS App' }, { title: 'Webinar iOS App' }, { title: 'Anna.Money iOS App' }, { title: 'Psorimetr iOS App' }, { title: 'BeaApp iOS App' }].map((i) => (<h2 key={i.title}>{i.title}</h2>)),
    }

    let responsive = {
        0: { items: 1 },
        1024: { items: 3 },
    }

    const onSlideChange = (e) => {
        console.debug('Item`s position during a change: ', e.item)
        console.debug('Slide`s position during a change: ', e.slide)
    }

    function onSlideChanged(e) {
        console.debug('Item`s position after changes: ', e.item)
        console.debug('Slide`s position after changes: ', e.slide)
    }

    return (
        <div>
            <AliceCarousel
                items={state.items}
                responsive={responsive}
                autoPlayInterval={2000}
                autoPlayDirection="ltr"
                autoPlay={true}
                disableAutoPlayOnAction={true}
                fadeOutAnimation={true}
                mouseDragEnabled={true}
                onSlideChange={onSlideChange}
                onSlideChanged={onSlideChanged}
                dotsDisabled={true}
                buttonsDisabled={true}
            />
        </div>
    )
}

export default Portfolio 