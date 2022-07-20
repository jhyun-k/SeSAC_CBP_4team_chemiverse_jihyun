import React from 'react';
import HomeHeaderNavy from './HomeHeaderNavy';

const Introduce = () => {
    return (
        <div>
            <HomeHeaderNavy />
            <img src={"/chemiverse_img/bg-gnb-noshadow.png"} alt="balloon"/>
            <h1>회사소개</h1>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/XFc-p5Rw8Ao" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/dGpYuTshhuA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            

        </div>
    );
};

export default Introduce;