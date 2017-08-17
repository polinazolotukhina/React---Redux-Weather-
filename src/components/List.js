import React, { Component } from 'react';
import  ReactDOM from 'react-dom';

import ReactHighcharts from 'react-highcharts';



export default class List extends Component {


  render() {
    const { weatherprops } = this.props;
    console.log("LIST", weatherprops )
    return (
      <div>
        <h1>{ weatherprops.data.city && weatherprops.data.city.name }</h1>

        <ReactHighcharts
          config={
            {
              chart: {
                polar: true
              },
              title: {
                text: `Temperature in ${ weatherprops.data.city && weatherprops.data.city.name } `
              },
              xAxis: {
                categories: weatherprops.data.list && weatherprops.data.list.map( a => {return a.dt_txt})
              },
              series: [{
                data: weatherprops.data.list && weatherprops.data.list.map( a => {return a.main.temp})
              },
              {
                name: 'Humidity',
                color: 'red',
                data: weatherprops.data.list && weatherprops.data.list.map( a => {return a.main.humidity})
              },
              { name: 'Pressure',
                data: weatherprops.data.list && weatherprops.data.list.map( a => {return a.main.pressure})
              }

              ]
            }

          }
          >
          </ReactHighcharts>
      </div>
    );
  }
}
