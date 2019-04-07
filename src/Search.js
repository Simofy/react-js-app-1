import React from 'react';

import ACTIONS from "./modules/action";
import { connect } from "react-redux";
import Element from './SearchElement';

class Search extends React.Component {
    constructor(props) {
        super(props);
    
        this.addButton = this.addButton.bind(this);
        this.handleMatch = this.handleMatch.bind(this);
        this.handleExclude = this.handleExclude.bind(this);
    }
    addButton(e){
        this.props.createItem(<Element />);
    }
    handleMatch(e){
        this.props.changeMatchValue(e.target.checked)
    }
    handleExclude(e){
        this.props.changeExcludeValue(e.target.checked)
    }
    render(){
        return(<div className="search-box">
            <div className="row"  style={{borderBottom:"1px solid black",maxHeight:"100%"}}>
                <div className="col-md-6" style={{borderRight:"1px solid black",}}>
                    <h3 style={{width:"100%"}}>Components:</h3>
                    <button class="button_new not-jumpy animated" onClick = {this.addButton} type="button" aria-label="Close" >Add</button>
                    <div style={{height:"250px", overflowY:"auto"}}>
                    {this.props.items.map(object => React.cloneElement(
                        object.element,
                        {id: object.id, data: object.data, last:this.props.items[this.props.items.length-1].id === object.id ? true : false}))}
                    </div>
                </div>
                
                <div className="col-md-6" >
                    <h3 style={{width:"100%"}}>Options:</h3>
                    <div className="row">
                        <label className="col-5" style={{margin: "auto !important"}}>Match exactly:</label>
                        <div className="col-7">
                            <input onChange={this.handleMatch} className="tgl tgl-light" id="cb1" type="checkbox" checked={this.props.match} defaultChecked={this.props.match}/>
                            <label className="tgl-btn" for="cb1"></label>
                        </div>
                    </div>
                    <div className="row">
                        <label className="col-5" style={{margin: "auto !important"}}>Show only with data:</label>
                        <div className="col-7">
                            <input onChange={this.handleExclude} className="tgl tgl-light" id="cb2" type="checkbox" checked={this.props.exclude} defaultChecked={this.props.exclude}/>
                            <label className="tgl-btn" for="cb2"></label>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
    }
}

const mapStateToProps = state => ({
    items: state.items,
    match: state.match,
    exclude: state.exclude,
  });
const mapDispatchToProps = dispatch => ({
createItem: item => dispatch(ACTIONS.createItem(item)),
deleteItem: id => dispatch(ACTIONS.deleteItem(id)),
changeMatchValue: match => dispatch(ACTIONS.changeMatchValue(match)),
changeExcludeValue: exclude => dispatch(ACTIONS.changeExcludeValue(exclude)),
});
export default connect(mapStateToProps, mapDispatchToProps) (Search)