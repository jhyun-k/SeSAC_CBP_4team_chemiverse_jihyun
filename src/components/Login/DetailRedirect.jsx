import React from 'react';
import { Navigate } from 'react-router-dom';
import Main from './../Main';
<<<<<<< HEAD


const DetailRedirect = ({auth}) => {
    return auth ? <Main />: <Navigate to="./login" />;
=======
import Home from './../Home';


const DetailRedirect = ({auth}) => {
    return auth ? <Main />: <Navigate to="/login" />;
>>>>>>> 2ffca4304b2c36eb37a565fda26f09d368de0bc6
};  

export default DetailRedirect;