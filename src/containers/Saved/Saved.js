import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import * as actions from '../../actions/weatherActions';
import SavedList  from '../../components/SavedList';

// I probably should map the array or SAVED here instead of using <SavedList/>

class Saved extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
       const { actions, saved } = this.props;
       console.log('saved', saved.saved.lenght)
        return (
                <div className="container">
                  {
                    (saved.saved.length ===0) ? (
                      <div> You have no saved weather </div>
                    ) : (
                      <div>
                      <h4 className="text-center"> This is your saved weather:</h4>
                        <SavedList  weatherprops={saved.saved}/>
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
