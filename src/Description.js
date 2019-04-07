import React, {
    Component
} from 'react';
import './Description.css';
class Description extends Component {
    render() {
        let image = this.props.image ;
        let props = this.props;
        let style = "description-default";
        if(props.hide){
            style += " description-hide";
            image = "";

        }else{
            style += " description-show";
        }
        return (<div id={props.id} image = {image} className={style}>
        <div className = "description-text" >
        <span>
            {this.props.description}
        </span>
        </div>
        </div>);
    }
}



export default Description;