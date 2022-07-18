import React from 'react';
import HomeHeaderNavy from './HomeHeaderNavy';

const Welcome = () => {
    return (
        <div>
        <HomeHeaderNavy />
        <img style={{
            width : '120px'
        }} src={"/chemiverse_img/bg-gnb-noshadow.png"} alt="balloon"/>
        <h1 style={
            {fontSize : '50px',
            padding : '40px'}}>환영인사</h1>
        <img src={"/chemiverse_img/Group_500.png"} alt="환영인사,회사소개" />
        </div>
    );
};

export default Welcome;