import React, { Component } from 'react';

class Pic extends Component{
    constructor() {
        super()
    }

    render() {
        return(
            <div style={style}>
                <img style={pic} src="https://firebasestorage.googleapis.com/v0/b/mvp-360.appspot.com/o/coffeepic.png?alt=media&token=8a81651c-0d50-4b24-acd2-c3455e22b361" />
            </div>
        )
    }
}
const style = {
    backgroundColor: '#f4b93d',
    height: '400px'
}

const pic = {
    width: '140px',
    border: '1.5px solid rgba(200,200,200,.75)',
    borderRadius: '50%',
    boxShadow: '10px 8px 20px -15px #000'
}

export default Pic;