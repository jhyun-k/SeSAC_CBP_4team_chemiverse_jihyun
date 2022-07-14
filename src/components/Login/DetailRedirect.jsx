import React from 'react';
import { Navigate } from 'react-router-dom';
import Main from './../Main';


const DetailRedirect = ({auth}) => {
    return auth ? <Main />: <Navigate to="/login" />;
};  

export default DetailRedirect;