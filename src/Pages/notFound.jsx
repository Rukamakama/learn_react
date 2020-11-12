import React from 'react';
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <h1>404 we cannot find your page</h1>
            <Link to="/" className="text-white">
                GO TO HOMEPAGE
            </Link>
        </div>
    );
};

export default NotFound;