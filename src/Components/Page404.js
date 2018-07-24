import React from 'react'
import {Link} from 'react-router-dom';

const Page404 = () => {

    return(
        <div className="page404">
            <div className="container">
                <h1>404</h1>
                <Link className="backToMain" to='/'>Take me back</Link>
            </div>
        </div>
    )
}

export default Page404
