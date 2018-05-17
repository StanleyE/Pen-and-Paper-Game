import React, { Component } from 'react';


class Box extends Component {
    render() {
        // clickHandler(index, side){
        //     //locate box and specific assign border classes
        // }

        let assigns = 'singularBox';
        return (
                <div className = {assigns} >
                    <button className='top-button'></button>
                    <button className= 'left-button rotate-button'></button>
                </div>
        );
    }
}

//onclick we are sening back to MS index and left/right/top/bottom
//at MS



export default Box;
