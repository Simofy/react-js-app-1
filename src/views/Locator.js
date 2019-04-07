import React, { Component } from 'react';
import './../App.css';
import Image from './../Image';
import {data} from './../data/data';
class Locator extends Component {
//   constructor(props) {
//     super(props);
//     this.grid_ratio = [];
//     this.current_grid_size = (document.documentElement.clientHeight / 250);
//   }

  state = {
  }
  createComponent(e) {
    e.preventDefault();
    //get the fruit object name from the form
    var fruit = this.refs.fruitName.value;
    //if we have a value
    //call the addFruit method of the App component
    //to change the state of the fruit list by adding an new item
    if(typeof fruit === 'string' && fruit.length > 0) {
      this.props.addFruit(fruit);
      //reset the form
      this.refs.fruitForm.reset();
    }
  }
  formControl(e){
    console.log(e)
  }
  render() {
      return (
        <div class="test">
          <form class="form-row locator-form form-control" id="elementForm" ref="elementForm" onSubmit={this.createComponent}>
          <div class="form-group locator-select">
            <label for="select_type">Select Type:</label>
            <select id="select_type" class="locator-input" name="select_type" onChange={this.formControl}>
              <option selected value="rezistor">Rezistor</option>
              <option value="capacitor">Capacitor</option>
              <option value="transistor">Transistor</option>
            </select>
            
          </div>
          <div class="form-group locator-value">
            <label for="compVal">
              Component value:
            </label>
            <input  type="text" class="locator-input" id="compVal" id="test0" placeholder="0" ref="compVal"  />
            <select id="test1" class="locator-input" name="select_type" onChange={this.formControl}>
              <option selected value="rezistor">Rezistor</option>
              <option value="capacitor">Capacitor</option>
              <option value="transistor">Transistor</option>
            </select>
          </div>
          <div class="form-group locator-form-submit locator-value">
          <label for="form-submit">{"\\"}
            </label>
            <button type="submit" name="form-submit" class="btn btn-primary locator-input locator-form-submit-btn">Add component</button>
          </div>
          </form>

        </div>
    );
  }
}

export default Locator;

