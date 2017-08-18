import React from 'react';
import {Link} from 'react-router';

const HomePage = () => {
  return (

    <div className="info">
        <div className = "container">
          <div className="row">
            <div className="col-md-offset-2 col-md-8">

                <p>A process in the weather of the heart</p>
                <p>Turns damp to dry; the golden shot</p>
                <p>  Storms in the freezing tomb.</p>
                <p>  A weather in the quarter of the veins</p>
                <p>  Turns night to day; blood in their suns</p>
                <p>  Lights up the living worm.</p>

                <p>  A process in the eye forwarns</p>
                <p>  The bones of blindness; and the womb</p>
                <p>  Drives in a death as life leaks out.</p>


                <p>Dylan Thomas</p>





                <Link className="btn btn-default" to="weather">Get The Weather Forecast</Link>

            </div>
          </div>
        </div>
    </div>


  );
};

export default HomePage;
