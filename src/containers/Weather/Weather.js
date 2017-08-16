import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import * as actions from '../../actions/weatherActions';
import List  from '../../components/List';
const FontAwesome = require('react-fontawesome');



class Weather extends React.Component {
    constructor(props){
        super(props);
         this.weatherOnSubmit = this.weatherOnSubmit.bind(this);
         this.  handleTtype = this.handleTtype.bind(this);
         this.state = { input:''}
    }
  handleTtype(e){
     this.setState({ input: e.target.value })
  }

   weatherOnSubmit(){
     const params ={
       q: this.state.input
     }
     this.props.actions.getWeather(params);
   }

    render() {
       const { actions, weather, city } = this.props;
        return (
          <div className="container">
            Please choose your city:
            <input onChange={ this.handleTtype}/>
            <button onClick={this.weatherOnSubmit}> Submit</button>
            <List weatherprops={weather}  />
          </div>

        );
    }
}

Weather.propTypes = {
    actions: PropTypes.object.isRequired,
    weather: PropTypes.object.isRequired,
    city: PropTypes.any.isRequired,
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
