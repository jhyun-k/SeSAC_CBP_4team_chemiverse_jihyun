import React from 'react';
import { Navigate } from 'react-router-dom';
import Main from './../Main';
import Home from './../Home';


const DetailRedirect = ({auth}) => {
    return auth ? <Main />: <Navigate to="/login" />;
};  

export default DetailRedirect;