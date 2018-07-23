import React from 'react';

class Rating extends React.Component {

    state = {
        rating: null,
        temp_rating: null
    }

    rate = (rating) => {
        this.setState ({
            rating: rating,
        temp_rating: rating
        })
    }
    
      star_over = (rating) => {    
        this.setState({
          rating: rating,
          temp_rating: this.state.rating
        });
      }

    star_out = () => {
        this.setState({ rating: this.state.temp_rating });
      }


    render() {
      var stars = [];
      
      for(var i = 0; i < 3; i++) {
        var klass = 'star-rating__star';
        
        if (this.state.rating >= i && this.state.rating != null) {
          klass += ' is-selected';
        }
  
        stars.push(
          <label
            className={this.klass}
            onClick={this.rate.bind(this, i)}
            onMouseOver={this.star_over.bind(this, i)}
            onMouseOut={this.star_out}>
            ★
          </label>
        );
      }
      
      return (
        <div className="star-rating">
          {stars}
        </div>
      );
    }
  }
      
  export default Rating