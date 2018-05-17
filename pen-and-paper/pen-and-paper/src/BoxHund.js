import React, { Component } from 'react';


class BoxHund extends Component {
    render() {
        return (
                <div className = 'singularBox bLB bTR bRR bBR'>
                    <button className='top-button'></button>
                    <button className= 'left-button rotate-button'></button>
                    <button className= 'right-button rotate-button'></button>
                    <button className= 'bottom-button'></button>
                    
                </div>
        );
    }
}



export default BoxHund;