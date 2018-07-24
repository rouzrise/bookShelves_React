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

      //DESTRUCTURING
      const { rating } = this.state;

      let stars = [];
      
      for(let i = 0; i < 3; i++) {
        let style = 'star';
        
        if (rating >= i && rating != null) {
          style += ' is-selected';
        }
  
        stars.push(
          <label
            key={i}
            className={style}
            onClick={this.changeRating.bind(this, i)}>
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