var React = require('react');
var {a} = require('react-router');

var About = (props) => {
  return (
    <div className='row'>
        <h3 className='text-center page-title'>ReactWeather App</h3>
        <p>An app built using
          <a href='https://facebook.github.io/react/' target='_blank'> React </a>
          where you can fetch the current weather of your chosen location.</p>
        <p>Weather data provided by
          <a href='http://openweathermap.com' target='_blank'> OpenWeatherMap</a>
        </p>
        <br/>
        <p>Project source code at:
          <a href='https://github.com/Slitzerman/ReactWeather' target='_blank'> Github</a>
        </p>
        <p>Part of an Udemy React course
        </p>
        <a href='https://www.udemy.com/the-complete-rect-web-app-developer-course' target='_blank'>The complete React web app developer course</a>
    </div>
  );
};

module.exports = About;
