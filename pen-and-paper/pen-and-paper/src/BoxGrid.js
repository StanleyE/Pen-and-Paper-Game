import React, { Component } from 'react';
import Box from './Box';
import Boxten from './Boxten';
import BoxNiner from './BoxNiner';
import BoxHund from './BoxHund';


class BoxGrid extends Component {
    render() {
        let boxJsx = [];
        for (let i = 1; i <= 100; i++) {
            if(i%10 === 0 && i<100){
            boxJsx.push( < Boxten id = {i} />)
            }
            else if (i > 90 && i < 100){
            boxJsx.push( < BoxNiner id = {i} />)
            } 
            else if (i === 100) {
            boxJsx.push( < BoxHund id = {i} turn = {this.props.turn}/>)                
            } 
            else {
            boxJsx.push( < Box id = {i} />)
                
            }
        }
        return (
            <div className = 'wrapper'>
                {boxJsx}
            </div>
        );
    }
}

export default BoxGrid;