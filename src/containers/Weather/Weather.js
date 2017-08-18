import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import * as actions from '../../actions/weatherActions';
import List  from '../../components/List';
import SavedButton  from '../../components/SavedButton';
// const FontAwesome = require('react-fontawesome');
import Geosuggest from 'react-geosuggest';





class Weather extends React.Component {
    constructor(props){
        super(props);
         this.weatherOnSubmit = this.weatherOnSubmit.bind(this);
         this.saveToSaved = this.saveToSaved.bind(this);
    }
   weatherOnSubmit(suggest){
     console.log('suggest', suggest);
     const params ={
       q: suggest.gmaps.address_components[0].long_name
     }
     this.props.actions.getWeather(params);
   }
   saveToSaved(){
     this.props.actions.saveUnsave();
   }
    render() {
       const { actions, weather } = this.props;
       console.log("this is how it should look ", weather)
        return (
          <div>
                {
                    (weather.data.length !=  0 ) ?
                    (
                      <div className="container">
                        <Geosuggest  className="text-center" placeholder="Please choose your city" onSuggestSelect={this.weatherOnSubmit} />
                        <List  weatherprops={weather}/>
                        <SavedButton  city={weather.data} passedActions={actions} />
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

};


function mapStateToProps(state) {
    const { weather, isLoading, error, city  } = state;
    return {
        weather,
        isLoading,
        error,
        city
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
