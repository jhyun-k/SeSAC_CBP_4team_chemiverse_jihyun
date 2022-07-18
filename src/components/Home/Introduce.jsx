import React from 'react';
import HomeHeaderNavy from './HomeHeaderNavy';

const Introduce = () => {
    return (
        <div>
            <HomeHeaderNavy />
            <img style={{
            width : '120px'
        }} src={"/chemiverse_img/bg-gnb-noshadow.png"} alt="balloon"/>
        <h1 style={
            {fontSize : '50px',
            padding : '40px'}}>회사소개</h1>
            <h1>엑스퍼트 컨설팅에 입사하는 게 아닌 회사에 입사한 신입사원을 위한 거라고 했으면서... 일단 엑스퍼팅 소개 자료 그대로 해야지...</h1>
            <img src={"/chemiverse_img/Group_500.png"} alt="회사소개" />

        </div>
    );
};

export default Introduce;