import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import * as actions from '../../actions/weatherActions';
import List  from '../../components/List';
import SavedButton  from '../../components/SavedButton';
import Geosuggest from 'react-geosuggest';
import {Button } from 'react-bootstrap';




class Weather extends React.Component {
    constructor(props){
        super(props);
         this.weatherOnSubmit = this.weatherOnSubmit.bind(this);
         this.saveToSaved = this.saveToSaved.bind(this);
    }
   weatherOnSubmit(suggest){
     const params ={
       q: suggest.gmaps.address_components[0].long_name
     }
     this.props.actions.getWeather(params);
   }
   saveToSaved(){
     this.props.actions.saveUnsave();
   }
    render() {
       const { actions, weather, saved } = this.props;
        return (
          <div>
                {
                    (weather.data.length !=  0 ) ?
                    (
                      <div className="container">
                        <Geosuggest ref={el=>this._geoSuggest=el}  className="text-center" placeholder="Please choose your city" onSuggestSelect={this.weatherOnSubmit} />
                        <Button className="clear" onClick={()=>this._geoSuggest.clear()}>Clear</Button>
                        <List  weatherprops={weather}/>
                        <SavedButton  city={weather.data} saved={saved.saved} passedActions={actions} />


                      </div>

                    ):(
                      <div className="container">
                        <Geosuggest  className="text-center" placeholder="Please choose your city" onSuggestSelect={this.weatherOnSubmit} />
                      </div>

                    )
                }

          </div>


        );
    }
}


Weather.propTypes = {
    actions: PropTypes.object.isRequired,
    weather: PropTypes.object.isRequired,
    saved: PropTypes.object.isRequired

};


function mapStateToProps(state) {
    const { weather, isLoading, error, city, saved  } = state;
    return {
        weather,
        isLoading,
        error,
        city,
        saved
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Weather);
