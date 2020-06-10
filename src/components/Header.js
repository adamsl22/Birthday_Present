import React from 'react';
import Ben_pic from '../images/Ben_pic.jpg'

export default function Header(){
    return(
        <div id="header">
            <div align="left" id="header-img"><img src={Ben_pic} width={150} /></div>
            <div id="header-text">
                <h1>Hi, I'm Ben!</h1>
                <h2>I make animations.</h2>
            </div>
        </div>
    )
}