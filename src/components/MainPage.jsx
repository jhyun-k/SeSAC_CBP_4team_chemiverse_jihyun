import React from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import Loginok from "./Login/Loginok";
import { useState } from "react";
import mainPageStyle from "./style/mainPage.module.css";

const MainPage = () => {
    const mainList = [
        { content: "Connect With 바로가기", href: "/" },
        { content: "교육장 이동", href: "./move" },
        { content: "교육안내", href: "./guide" },
        { content: "진단", href: "./diagnosis" },
        { content: "역량학습", href: "./learning" },
        { content: "ChemiStory", href: "./chemiStory" },
        { content: "멘토링", href: "./mentoring" },
        { content: "게시판", href: "./post" },
    ];

    return (
        <div className={mainPageStyle.mainPage}>
            <ul>
                {mainList.map((element, index) => {
                    return (
                        <li key={index}>
                            <Link to={element.href}>{element.content}</Link>
                        </li>
                    );
                })}
            </ul>
            <img
                src={process.env.PUBLIC_URL + "/chemiverse_img/img-main.png"}
                usemap="#image-map"
                alt=""
            />
            <map name="image-map">
                <area
                    target=""
                    alt="ConnectWith"
                    title="ConnectWith"
                    href=""
                    coords="860,239,950,172,947,89,874,36,803,85,759,55,711,92,744,178"
                    shape="poly"
                />
                <area
                    target=""
                    alt="move"
                    title="move"
                    href=""
                    coords="483,266,308,369,428,471,601,365"
                    shape="poly"
                />
                <area
                    target=""
                    alt="guide"
                    title="guide"
                    href=""
                    coords="1131,353,1213,321,1213,242,1092,171,1014,231,1016,293"
                    shape="poly"
                />
                <area
                    target=""
                    alt="diagnosis"
                    title="diagnosis"
                    href=""
                    coords="1265,381,1370,320,1423,355,1412,470,1325,520,1256,493"
                    shape="poly"
                />
                <area
                    target=""
                    alt="learning"
                    title="learning"
                    href=""
                    coords="731,480,833,541,907,486,907,416,812,355,736,404"
                    shape="poly"
                />
                <area
                    target=""
                    alt="chemiStory"
                    title="chemiStory"
                    href=""
                    coords="628,461,496,537,494,623,548,651,674,593,676,517"
                    shape="poly"
                />
                <area
                    target=""
                    alt="freepost"
                    title="freepost"
                    href=""
                    coords="816,587,743,622,737,709,892,790,966,743,962,676"
                    shape="poly"
                />
                <area
                    target=""
                    alt="mentoring"
                    title="mentoring"
                    href=""
                    coords="956,398,957,600,1081,663,1131,647,1128,493"
                    shape="poly"
                />
            </map>
        </div>
    );
};

export default MainPage;
