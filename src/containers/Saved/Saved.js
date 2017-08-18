import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import * as actions from '../../actions/weatherActions';
import SavedList  from '../../components/SavedList';
import ReactHighcharts from 'react-highcharts';


class Saved extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
       const { actions, saved } = this.props;
        return (

                      <div>

                      {
                        (saved.saved.length ===0) ? (
                          <div>  <h4 className="text-center"> You have no saved weather </h4></div>
                        ) : (
                          <div>
                          <h4 className="text-center"> This is your saved weather:</h4>



                          {
                            saved && saved.saved.map((item, id) =>
                            <SavedList key={id}
                              weatherprops ={item}
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
    saved:PropTypes.object.isRequired

};


function mapStateToProps(state) {
    const { saved  } = state;
    return {
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
)(Saved);
