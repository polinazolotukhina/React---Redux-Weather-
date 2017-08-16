import React, { Component } from 'react';

export default class List extends Component {

  render() {
    const { weatherprops } = this.props;
    console.log("LIST", weatherprops )
    return (
      <div>
        <h1>{ weatherprops.data.name }</h1>
        <p> temperature: { weatherprops.data.main && weatherprops.data.main.temp}</p>
        <p> humidity : { weatherprops.data.main && weatherprops.data.main.humidity }</p>
        <p> pressure: { weatherprops.data.main && weatherprops.data.main.pressure }</p>
        <p> { weatherprops.data.weather&&weatherprops.data.weather[0].description }</p>
        <p> wind speed: { weatherprops.data.wind && weatherprops.data.wind.speed }</p>

      </div>
    );
  }
}
