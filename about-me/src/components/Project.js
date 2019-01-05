import React from 'react';
import appStore from '../appStore.png';

const Project = ({ title, type }) =>
    <div className='project'>
        <div className='projectInfo'>
            <img className='projectImage' src={appStore} alt="" />
            <div className='projectType'>{type}</div>
        </div>
        <div className='projectTitle'>{title}</div>
    </div >

export default Project