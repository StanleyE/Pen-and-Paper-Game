import React, { Component } from 'react';


class BoxNiner extends Component {
    render() {
        return (
                <div className = 'singularBox bLR bTR bBR'>
                    <button className='top-button'></button>
                    <button className= 'left-button rotate-button'></button>
                    <button className= 'bottom-button'></button>
                    
                </div>
        );
    }
}



export default BoxNiner;