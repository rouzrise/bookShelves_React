import React from 'react'
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import img from './../images/error.jpg'

class Page404 extends React.Component {

    render () {
        return(
            <div className="page404">
                <div class="container">
                    <h1>404</h1>
                    <Link className="backToMain" to='/'>Take me back</Link>
                </div>
            </div>
        )
    }
}

// Page404.propTypes = {
//     book: PropTypes.object,
//     updateBookShelf: PropTypes.func
// }

export default Page404
