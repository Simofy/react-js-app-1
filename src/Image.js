import React, {
    Component
} from 'react';
import './Image.css';
class Image extends Component {

    
    render() {
        const { onPress } = this.props;
        let className = "box-default";
        if(this.props.pos === 0){
            className += " box-full";
        }else{
            className+=" box-ratio-" + (this.props.pos % 2 ?this.props.ratio : (10 - this.props.ratio))
        }
        return (<div description = {this.props.description} id = {this.props.id} className={className} onClick={onPress} friend = {this.props.friend}><img alt= {this.props.src} src = {this.props.src} className="image-default"/></div>)
    }
}
export default Image;