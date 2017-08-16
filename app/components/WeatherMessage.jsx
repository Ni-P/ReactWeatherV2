
var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function() {
//     return (
//       <p>It's {this.props.temp} in {this.props.location}</p>
//     );
//   }
// });

var WeatherMessage = (props) => {
  return (
    <h3 className='text-center'>It's {props.temp} in {props.location}</h3>
  );
};

module.exports = WeatherMessage;
