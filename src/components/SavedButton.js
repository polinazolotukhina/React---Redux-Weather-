import React from 'react';
import {Button } from 'react-bootstrap';

class SavedButton extends React.Component {
  constructor(props){
      super(props);
       this.saveWeather= this.saveWeather.bind(this);

  }

  alertClicked() {
    alert('It was saved to your list!' );
  }
  saveWeather(){

    this.props.passedActions.saveUnsave(this.props.city);
    this.alertClicked();
  }



  render() {
    const listgroupInstance = (
        <Button onClick={this.saveWeather}>
          Save this forecast
        </Button>

    );
    const { passedActions, city, saved } = this.props;
    const label = (saved.filter(e => e.city.id == city.city.id).length > 0) ? 'The Forecast Was Saved ' : 'Save The Forecast';


    console.log('button city', city)
        return (
          <div  className="text-center"  >

          {
            (saved.filter(e => e.city.id == city.city.id).length == 0) ? (
              <div>

                {listgroupInstance}
              </div>
            ) : (<div></div>)

}



         </div>
        )
    }
}

export default SavedButton;
