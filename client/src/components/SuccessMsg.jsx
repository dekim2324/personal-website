import React, { Component } from 'react';

class SuccessMsg extends Component {
    constructor() {
        super()
    }

    render() {
        return(
            <div style={style}>
                <div>Congratulations, Your message has been sent! </div>
                <button 
                style={button} 
                type="button" 
                className="btn btn-outline-dark"
                onClick={() => this.props.handleHome()}
                >Back to Home</button>
            </div>
        )
    }
}

const style = {
    fontFamily: `'Varela Round', sans-serif`,
    backgroundColor: '#fafafa',
    height: '430px',
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '23px',
    flexDirection: 'column'
}

const button = {
    marginTop: '60px',
    marginLeft: '340px'
}

export default SuccessMsg;