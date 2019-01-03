import React from 'react';
import TimeStampt from './TimeStamp';

const TimeLine = (props) =>
    <section className='timeLineSection'>
        <div className='experience'>Experience</div>
        <div className='jobs'>
            <TimeStampt />
            <TimeStampt />
            <TimeStampt />
            <TimeStampt />
        </div>
    </section>

export default TimeLine