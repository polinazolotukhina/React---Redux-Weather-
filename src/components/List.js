import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';
export default class List extends Component {


  render() {
    const { weatherprops } = this.props;
    return (
      <div>
        <h1 className="text-center">{ weatherprops.data.city && weatherprops.data.city.name }</h1>

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
