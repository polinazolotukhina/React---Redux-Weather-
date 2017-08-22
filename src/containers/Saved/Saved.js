import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import * as actions from '../../actions/weatherActions';
import SavedList  from '../../components/SavedList';
import ReactHighcharts from 'react-highcharts';
import { Link, IndexLink } from 'react-router';


class Saved extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
       const { actions, saved, weather  } = this.props;
        return (

                      <div>

                      {
                        (saved.saved.length ===0) ? (
                          <div className="text-center">
                            <h4 > You have not saved any  weather forecast yet.  </h4>
                            <Link to="/">Search for weather in different cities</Link>
                          </div>
                        ) : (
                          <div>
                          <h4 className="text-center"> This is your saved weather:</h4>
                          {
                            saved && saved.saved.map((item, id) =>
                            <SavedList key={id}
                              weatherprops ={item} actions={actions} city= { item }
                              />
                            )
                          }
                          </div>

                        )

                      }

                      </div>

                );
    }
}


Saved.propTypes = {
    actions: PropTypes.object.isRequired,
    saved:PropTypes.object.isRequired,
    weather: PropTypes.object.isRequired

};


function mapStateToProps(state) {
    const { saved, weather  } = state;
    return {
        saved,
        weather
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
)(Saved);
