import React, { Component } from 'react';
import  ReactDOM from 'react-dom';
import SavedButton  from './SavedButton';

import ReactHighcharts from 'react-highcharts';



export default class List extends Component {


  render() {
    const { weatherprops } = this.props;
        console.log("Here is what you got", weatherprops )
    return (

      <div>
        <h1 className="text-center">{ weatherprops.city&&weatherprops.city.name }</h1>
        <ReactHighcharts
          config={
            {
              chart: {
                polar: true
              },
              title: {
                text: `Weather Forcast For The Next 5 Days`
              },
              xAxis: {
                categories: weatherprops.list && weatherprops.list.map( a => {return a.dt_txt})
              },
              series: [{
                data: weatherprops.list && weatherprops.list.map( a => {return a.main.temp})
              },
              {
                name: 'Humidity',
                color: 'red',
                data: weatherprops.list && weatherprops.list.map( a => {return a.main.humidity})
              },
              { name: 'Pressure',
                data: weatherprops.list && weatherprops.list.map( a => {return a.main.pressure})
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
