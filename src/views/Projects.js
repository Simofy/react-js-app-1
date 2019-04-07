import React, { Component } from 'react';
import './../App.css';
import Image from '../Image';
import {data} from './../data/data';
import Description from './../Description';
import { connect } from "react-redux";
import _ from "lodash";
class Projects extends Component {
  constructor(props) {
    super(props);
    this.grid_ratio = [];
    this.current_grid_size = (document.documentElement.clientHeight / 250);
  }
  createGrid = (size) => {
    let specificData = _.cloneDeep(data);
    let checkData = {
      resistor:[],
      capacitor: [],
      transistor: [],
      microscheme: [],
    };
    this.props.items.forEach(element => {
      switch (element.data.type) {
        case "resistor":
          checkData.resistor.push(element.data.value); 
          break;
        case "capacitor":
         checkData.capacitor.push(element.data.value); 
          break;
        case "transistor":
          checkData.transistor.push(element.data.value); 
          break;
        case "microscheme":
          checkData.microscheme.push(element.data.value); 
          break;
        default:
          break;
      }
    });
    let extraCheck = (checkData.resistor.length > 0 || checkData.capacitor.length > 0 || checkData.transistor.length > 0 || checkData.microscheme.length > 0);
    if(this.props.exclude || extraCheck){
      specificData = specificData.filter(element =>  {
        element.score = 0;
        return element.data !== undefined
      })
    }

    if(extraCheck){
      specificData.forEach(data => {
        let data_ = data.data;
        checkData.resistor.forEach(element => {
          let index = data_.resistor.find(a =>(a === parseInt(element)));
          if(!index){
            data.score -= this.props.match ? 10000 : 10;
          }else{
            data.score += 10;
            data_.resistor.splice(index, 1);
          }
        });
        checkData.capacitor.forEach(element => {
          let index = data_.capacitor.find(a =>(a === parseInt(element)));
          if(!index){
            data.score -= this.props.match ? 10000 : 10;
          }else{
            data.score += 10;
            data_.capacitor.splice(index, 1);
          }
        });
        checkData.transistor.forEach(element => {
          let index = data_.transistor.find(a =>(a === element));
          if(!index){
            data.score -= this.props.match ? 10000 : 10;
          }else{
            data.score += 50;
            data_.transistor.splice(index, 1);
          }
        });
        checkData.microscheme.forEach(element => {
          let index = data_.microscheme.find(a =>(a === element));
          if(!index){
            data.score -= this.props.match ? 10000 : 10;
          }else{
            data.score += 100;
            data_.microscheme.splice(index, 1);
          }
        });
      });
    }
    specificData.sort((a,b) => (b.score - a.score));
    if(this.props.match)
      specificData = specificData.filter(element =>  (element.score > -5000));
    console.log(specificData)

    size = Math.floor(size);
    size += size % 5;
    let grid = []
    let ratio = 0;
    //let flip = false;
    if( size > specificData.length){
      size = specificData.length;
    }
    for(let i = 0; i < size; i++){
      if((i%5)%2 === 1){
        if(this.grid_ratio[i] === undefined){
          ratio = (3 + Math.random() * 4).toFixed(0)
          this.grid_ratio[i] = ratio;
        }
        ratio = this.grid_ratio[i]
      }
      let id = "image_" + i;
      let friend = "image_";
      if(i%5 === 0){
        friend = id;
      }else{
        friend += !((i%5)%2) ? (i-1) : (i+1);
      }
      let description = "No data provided."
      grid.push(<Image onPress={this.imagePress} src = {"img/" + specificData[i].img} 
        ratio = {ratio} pos = {i%5} id = {id} friend = {friend} description = {description}></Image>)
    }
    return grid
  }
  imagePress = (e) =>{
    let friend = e.target.getAttribute("friend")
    let description = e.target.getAttribute("description")
    let ref_des = document.getElementById("description")
    let element = e.target;
    let current = ref_des.getAttribute("image")
    if(current === element.getAttribute("id")){
      this.setState({d_hide:true})
      document.body.appendChild(ref_des)
    }else{
      if(friend === current){
        this.current_image = e.target.getAttribute("id")
        this.current_desc = description;
        this.setState({d_hide:false})
      }else{

        element.parentNode.insertBefore(ref_des, element.nextSibling);
        this.current_image = e.target.getAttribute("id")
        this.current_desc = description;
        this.setState({d_hide:false})
      }
    }

  }
  state = {
    numChildren: 0,
    d_hide:true,
    page:0
  }
  current_image = "";
  current_desc = "";
  handleScroll = (e) => {
    const top = document.documentElement.scrollTop;
    const height = document.documentElement.offsetHeight;
    if(height - top < 1500){
      this.setState({
        numChildren: this.state.numChildren + 1
      });
      this.current_grid_size += (document.documentElement.clientHeight / 250)
      //console.log(this.createGrid)
    }
  }


  render() {
      return (
        <div onScroll={this.handleScroll}>
        <div className="left-beauty"></div>
        <div className="right-beauty"></div>
        <Description id = "description" image = {this.current_image} hide={this.state.d_hide}
        description = {this.current_desc}></Description>
        {window.addEventListener('scroll', this.handleScroll)}
        {this.createGrid(this.current_grid_size)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.items,
  match: state.match,
  exclude: state.exclude,
});
const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
