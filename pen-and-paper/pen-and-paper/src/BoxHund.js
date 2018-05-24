import React, { Component } from 'react';


class BoxHund extends Component {
    render() {
        return (
                <div className = 'singularBox bAll blc3 brc6 btc1 bbc4'>
                    <button className='top-button' onClick = {()=>{this.props.turn(this.props.id, 'top')}}></button>
                    <button className= 'left-button rotate-button' onClick = {()=>{this.props.turn(this.props.id, 'left')}}></button>
                    <button className= 'right-button rotate-button' onClick = {()=>{this.props.turn(this.props.id, 'right')}}></button>
                    <button className= 'bottom-button' onClick = {()=>{this.props.turn(this.props.id, 'bottom')}}></button>
                    <div className = 'dot'></div>                    
                    <div className = 'dotRight'></div> 
                    <div className = 'dotBottom'></div> 
                    <div className = 'dotHund'></div>  
                </div>
        );
    }
}



export default BoxHund;