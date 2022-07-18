import React from 'react';
import { Navigate } from 'react-router-dom';
import Main from './../Main';


const DetailRedirect = ({auth}) => {

    console.log('리다이렉트',auth);
    return auth ? <Main />: <Navigate to="/login" />;
};  

export default DetailRedirect;