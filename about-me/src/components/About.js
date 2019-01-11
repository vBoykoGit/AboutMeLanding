import React from 'react';
import photo from '../photo.jpg';

const About = (props) =>
    <section className='aboutSection'>
        <div className='about'>
            <div className='iam'>I Am a Creative Frontend Developer</div>
            <div className='story'>Hello, my name is Vladimir Boyko. I have an experience with working on iOS applications. Now i’ve redeveloped my specialisation to the react-native and frontend development. My experience gives me and ability to work with different platforms screens and resolutions. My favourite technologies right now is React, ReactNative, Redux, TypeScript and Electrone. My priorities is to be part of healthy and kind community and opportunity to work with professional and experienced team. As developer i am working on Agile and Scrum, using tools like Kaiten, Trello and Jira. My experience with Continuous delivery and Continuous integration is related with using Circle CI and Fabric.</div>
            <img src={photo} className='photo' />
        </div>
    </section>

export default About