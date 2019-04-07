import React from 'react';

import ACTIONS from "./modules/action";
import { connect } from "react-redux";

class Element extends React.Component {
    constructor(props) {
        super(props);
    
        this.type_changed = this.type_changed.bind(this);
        this.value_changed = this.value_changed.bind(this);
        this.count_changed = this.count_changed.bind(this);
        this.remove = this.remove.bind(this);
        this.update = this.update.bind(this);
        
        this.setState({
            type : this.props.data.type,
            value: this.props.data.value,
            count: this.props.data.count,
        })
    }

    state = {
        type : "resistor",
        value: "",
        count: 0,
    }
    type_changed(e){
         this.setState({
             type:e.target.value
        }, () =>(this.update()))
    }
    value_changed(e){
        this.setState({
            value:e.target.value
       }, () =>(this.update()))
    }
    count_changed(e){
        this.setState({
            count:e.target.value
       }, () =>(this.update()))
    }
    remove(e){
        this.props.deleteItem(this.props.id);
    }
    update(){
        this.props.updateItem(this.props.id, {
            type : this.state.type,
            value: this.state.value,
            count: this.state.count,
        })
    }
    render(){
        let className = "list-object" + (this.props.last ? " list-object-last" : "");
        return(<div className={className}>
            <select className="col-3" name="type" onChange={this.type_changed} value={this.props.data.type}>
                <option value="resistor">Resistor</option>
                <option value="capacitor">Capacitor</option>
                <option value="transistor">Transistor</option>
                <option value="microscheme">Microscheme</option>
            </select>
            <label className="col-2">Value:</label>
            <input className="col-2" onChange={this.value_changed} value={this.props.data.value}/>
            <label className="col-2">Count:</label>
            <input className="col-2" onChange={this.count_changed} value={this.props.data.count}/>
            <button onClick = {this.remove} className="col-1 close" type="button" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>)
    }
}
const mapStateToProps = state => ({
    items: state.items
  });
const mapDispatchToProps = dispatch => ({
//createItem: item => dispatch(ACTIONS.createItem(item)),
deleteItem: id => dispatch(ACTIONS.deleteItem(id)),
updateItem: (id, data) => dispatch(ACTIONS.updateItem(id, data)),

});
export default connect(mapStateToProps, mapDispatchToProps) (Element)