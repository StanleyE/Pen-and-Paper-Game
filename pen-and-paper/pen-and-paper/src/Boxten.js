import React, { Component } from 'react';


class Boxten extends Component {
    render() {
        return (
                <div className = 'singularBox bLR bTR bRR'>
                    <button className='top-button'></button>
                    <button className= 'left-button rotate-button'></button>
                    <button className= 'right-button rotate-button'></button>
                </div>
        );
    }
}



export default Boxten;