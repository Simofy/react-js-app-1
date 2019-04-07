import React from 'react';
export default class ReactHeader extends React.Component {
componentDidMount(){
    let canvas = document.getElementById('background');
    canvas.setAttribute('width', window.innerWidth);
    canvas.setAttribute('height', window.innerHeight);
    let context = canvas.getContext('2d');
    let size = 50;
    for(let i = 0; i < window.innerWidth; i+=size){
      for(let k = 0; k < window.innerHeight; k+=size){
        drawRect(context, {x:i, y:k}, 10, size, 20, "#f6f6f6", Math.random() >= 0.5)
      }
    }
}
render(){
    return(<canvas id="background">
    </canvas>)
}
}

let drawRect = function(ctx, p, s, size, gap, color, type){
    ctx.fillStyle = color;
    size = size / 2;
    s = s / 2;
    gap = gap / 2;
    switch (type) {
      case true:
        ctx.beginPath()
        ctx.moveTo(p.x + size - s, p.y - size)
        ctx.lineTo(p.x + size, p.y - size)
        ctx.lineTo(p.x + size, p.y - size + s)
        ctx.lineTo(p.x - size + s, p.y + size )
        ctx.lineTo(p.x - size, p.y + size )
        ctx.lineTo(p.x - size, p.y + size - s)
        ctx.closePath()
        ctx.fill()
      break;
      case false:
        ctx.beginPath()
        ctx.moveTo(p.x + size - s, p.y - size)
        ctx.lineTo(p.x + size, p.y - size)
        ctx.lineTo(p.x + size, p.y - size + s)
  
  
        ctx.lineTo(p.x + gap + s, p.y - gap)
        ctx.lineTo(p.x + gap, p.y - gap)
        ctx.lineTo(p.x + gap, p.y - gap - s)
        ctx.closePath()
        ctx.fill()
      break;
      case 2:
      break;
      case 3:
      break;
      default:
        break;
    }
  }
  
