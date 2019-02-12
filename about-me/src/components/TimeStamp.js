import React from 'react';

const TimeStampt = ({ interval, title, description }) =>
    <section className='stamp'>
        <span className='circle'></span>
        <div className='date'>{interval}</div>
        <div className='title'>{title}</div>
        <div className='description'>{description}</div>
    </section>

export default TimeStampt