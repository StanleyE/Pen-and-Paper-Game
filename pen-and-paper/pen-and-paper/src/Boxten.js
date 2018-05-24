import React, { Component } from 'react';


class Boxten extends Component {
    render() {
        return (
                <div className = 'singularBox btrb'>
                    <button className='top-button'></button>
                    <button className= 'left-button rotate-button'></button>
                    <button className= 'right-button rotate-button'></button>
                    <div className = 'dot'></div> 
                    <div className = 'dotRight'></div>                
                </div>
        );
    }
}



export default Boxten;