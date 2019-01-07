import React from 'react';
import appStore from '../appStore.png';

const Project = ({ title, type, source }) =>
    <div className='project'>
        <div className='projectInfo'>
            <img className='projectImage' src={appStore} alt="" />
            <div className='projectType'>{type}</div>
            <div className='cover centeredColumn'>
                <p>To AppStore</p>
                <i className='arrow'></i>
            </div>
        </div>
        <div className='projectTitle'>{title}</div>
    </div >

export default Project