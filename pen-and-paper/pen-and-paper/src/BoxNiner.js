import React, { Component } from 'react';


class BoxNiner extends Component {
    render() {
        return (
                <div className = 'singularBox blbb'>
                    <button className='top-button'></button>
                    <button className= 'left-button rotate-button'></button>
                    <button className= 'bottom-button'></button>
                    <div className = 'dot'></div>
                    <div className = 'dotBottom'></div>  
                </div>
        );
    }
}



export default BoxNiner;