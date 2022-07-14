import React from 'react';
import { Navigate } from 'react-router-dom';
import Main from './../Main';
<<<<<<< HEAD
=======
import Home from './../Home';
>>>>>>> 86aa7c149f1046e204a0a09c9cf319aeb08e71dd


const DetailRedirect = ({auth}) => {
    return auth ? <Main />: <Navigate to="/login" />;
};  

export default DetailRedirect;