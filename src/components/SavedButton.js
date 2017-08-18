import React from 'react';

class SavedButton extends React.Component {


  render() {
    const { passedActions, city } = this.props;
    console.log('button city', city)
        return (
          <div  className="text-center"  >
           <button  onClick={() => { passedActions.saveUnsave(city)}}>Save me</button>
         </div>
        )
    }
}

export default SavedButton;
