import React, { Component } from 'react';


class BoxHund extends Component {
    render() {
       let copy = Array.from(this.props.class);
    //    filter that will compaire this.props.id too index value of this.props.class

        let filtercopy = copy.filter((element , index) => {
           return index === this.props.id;
       })
       let border = !!filtercopy.length ? filtercopy[0].class : '';
        return (
                <div className = {border} >
                    <button className='top-button' onClick = {()=>{this.props.turn(this.props.id, 'btc')}}></button>
                    <button className= 'left-button rotate-button' onClick = {()=>{this.props.turn(this.props.id, 'blc')}}></button>
                    <button className= 'right-button rotate-button' onClick = {()=>{this.props.turn(this.props.id, 'brc')}}></button>
                    <button className= 'bottom-button' onClick = {()=>{this.props.turn(this.props.id, 'bbc')}}></button>
                    <div className = 'dot'></div>                    
                    <div className = 'dotRight'></div> 
                    <div className = 'dotBottom'></div> 
                    <div className = 'dotHund'></div>  
                </div>
        );
    }
}



export default BoxHund;