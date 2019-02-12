import React from 'react';
import TimeStampt from './TimeStamp';

const TimeLine = (props) =>
    <section className='timeLineSection'>
        <div className='experience'>Experience</div>
        <div className='jobs'>
            {[{
                interval: '2015-2016', title: 'IOS developer in Aspirity', description: "Developing iOS applications\n\
            Building an Application Architecture\n\
            Working with the map and navigation on iOS devices\n\
            Estimating of work hours\n\
            I have taken part in the development and support of 3 applications." },
            {
                interval: '2016-2017', title: 'IOS developer in Bencom', description: "Developing iOS applications\n\
            Supporting for already released applications\n\
            Implementation of unique application design\n\
            Using development architecture patterns\n\
            Interaction with other developers, management, testers, and customers\n\
            Estimating of work hours" },
            {
                interval: '2017-2017', title: 'IOS developer in Webinar.ru', description: "Project work\n\
            Support and development of Webinar iOS application" },
            { interval: '2017-2018', title: 'IOS developer in Anna.money', description: "Anna is a new modern bank oriented to small business. I have been part of the iOS development team. We have laid the foundations and structure of Anna's mobile application. During development we had permanent communication with our backend team, testers, managers and international partners." }]
                .map((item) => <TimeStampt interval={item.interval} title={item.title} description={item.description} />)}
        </div>
    </section>

export default TimeLine