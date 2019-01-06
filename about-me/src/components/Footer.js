import React from 'react';
import facebook from '../facebook.png';
import linkedin from '../linkedin.png';
import mail from '../mail.png';
import skype from '../skype.png';

const Footer = (props) =>
    <section className='footerSections'>
        <div className='footerSocial rightMargin'>
            <div><a href='https://www.facebook.com/profile.php?id=100011085673391' target="_blank"><img className='inlineIcon' src={facebook} alt="" /></a></div>
            <div><a href='https://www.linkedin.com/in/vladimir-boyko-24a98a112/' target="_blank"><img className='inlineIcon' src={linkedin} alt="" /></a></div>
        </div>
        <div className='centered rightMargin'>
            <img className='inlineIcon' src={mail} alt="" />
            <span>vboyko024@gmail.com</span>
        </div>
        <div className='centered rightMargin'>
            <img className='inlineIcon' src={skype} alt="" />
            <span>vboyko24</span>
        </div>
        <div>© 2018 Vladimir Boyko</div>
    </section >

export default Footer