import React from 'react'
import {Link} from 'react-router-dom';


class Page404 extends React.Component {

    render () {
        return(
            <div className="page404">
                <div className="container">
                    <h1>404</h1>
                    <Link className="backToMain" to='/'>Take me back</Link>
                </div>
            </div>
        )
    }
}

export default Page404
