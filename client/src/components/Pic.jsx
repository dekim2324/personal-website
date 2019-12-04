import React, { Component } from 'react';

class Pic extends Component{
    constructor() {
        super()
    }

    handleResume() {
        // alert('clicked')
        window.open('https://firebasestorage.googleapis.com/v0/b/mvp-360.appspot.com/o/Dennis%20Resume.pdf?alt=media&token=58efae92-9c1d-46d1-8c7d-e9ad3b3b021a', '_blank')
    }

    render() {
        return(
            <div style={container}>
                <div>
                    <img style={pic} src="https://firebasestorage.googleapis.com/v0/b/mvp-360.appspot.com/o/coffeepic.png?alt=media&token=8a81651c-0d50-4b24-acd2-c3455e22b361" />
                </div>

                <h5 style={location}>Austin, TX | 'Murica</h5>

                <div> Building software is my passion. I am constantly blown away by new technology. </div>
                <div> Interests in basketball (Dallas Mavericks), cooking, eating fatty foods, and traveling. </div>

                <div style={container2}>
                    <button 
                    style={button1} 
                    type="button" 
                    class="btn btn-danger" 
                    onClick={e => this.handleResume(e)}>Resumé</button>
                    <button type="button" class="btn btn-dark">Email</button>
                </div>
            </div>
        )
    }
}
const container = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fafafa',
    height: '400px',
    fontFamily: `'Varela Round', sans-serif`
}
const container2 = {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '15px'
}
const button1 = {
    marginRight: '25px'
}

const pic = {
    height: '185px',
    width: '155px',
    borderRadius: '50%',
    boxShadow: '10px 8px 20px -15px #000',
    marginTop: '30px'
}

const location = {
    marginTop: '15px'
}



export default Pic;