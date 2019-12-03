import React, { Component } from 'react';

class Header extends Component {
    constructor() {
        super()
    }

    render() {
        return(
            <div style={style}>
                <div style={name}>  Hey! 👋 I'm Dennis Kim </div>
                <div style={title}> Software Engineer </div>
            </div>
        )
    }
}

const style = {
    backgroundColor: '#fafafa',
    height: '150px',
    fontFamily: `'Open Sans', sans-serif`,
    textAlign: 'center'
}
const name = {
    fontSize: '35px',
    paddingTop: '25px',
    fontWeight: '540'
}
const title = {
    fontSize: '20px',
    fontWeight: '320',
    marginTop: '10px'
}

export default Header;