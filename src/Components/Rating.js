import React from 'react';

class Rating extends React.Component {

    state = {
        rating: null,
    }

    changeRating = (rating) => {
        this.setState ({
            rating: rating,
        })
    }

    render() {
      let stars = [];
      
      for(let i = 0; i < 3; i++) {
        let style = 'star';
        
        if (this.state.rating >= i && this.state.rating != null) {
          style += ' is-selected';
        }
  
        stars.push(
          <label
            className={style}
            onClick={this.changeRating.bind(this, i)}
            >
            ★
          </label>
        );
      }
      
      return (
        <div className="rating">
          {stars}
        </div>
      );
    }
  }
      
  export default Rating