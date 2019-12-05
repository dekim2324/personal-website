import React, { Component } from 'react';

class Header extends Component {
    constructor() {
        super()
    }

    render() {
        return(
            <div style={style}>

                <div style={name}>Hey! 👋 I'm</div>
                
                <div className='animated-text'>    
                    <div className='line'>Korean-American</div>
                    <div className='line'>a fullstack developer</div>
                    <div className='line'>a software engineer</div>
                </div>

            </div>
        )
    }
}

const style = {
    backgroundColor: 'white',
    height: '160px',
    fontFamily: `'Varela Round', sans-serif`,
    textAlign: 'center'
}
const name = {
    fontSize: '35px',
    paddingTop: '25px',
    fontWeight: '540',
    display: 'inlineBlock'
}


export default Header;