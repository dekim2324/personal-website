import React, { Component } from 'react';

class Pic extends Component{
    constructor(props) {
        super(props);
    }

    handleResume(e) {
        window.open('https://firebasestorage.googleapis.com/v0/b/mvp-360.appspot.com/o/DennisResume.pdf?alt=media&token=b4ef4ce4-eadc-45fd-abc0-3dbb3adac7c9', '_blank')
    }

    render() {
        return(
            <div style={container}>
                <div>
                    <img style={pic} src="https://firebasestorage.googleapis.com/v0/b/mvp-360.appspot.com/o/coffeepic.png?alt=media&token=8a81651c-0d50-4b24-acd2-c3455e22b361" />
                </div>

                <h5 style={location}>Austin, TX | Dennis Kim</h5>

                <div> Building software is my passion. I am constantly blown away by new technology. </div>
                <div> Interests in basketball (Dallas Mavericks), cooking, eating fatty foods, and traveling. </div>

                <div style={container2}>
                    <button 
                    style={button1} 
                    type="button" 
                    className="btn btn-danger" 
                    onClick={e => this.handleResume(e)}>Resumé</button>

                    <button 
                    type="button" 
                    className="btn btn-dark"
                    onClick={() => this.props.handleForumChange()}
                    >Message</button>
                </div>

                <div style={dots}>
                    <i className="fas fa-circle fa-xs"></i>
                    <i className="fas fa-circle fa-xs"></i>
                    <i className="fas fa-circle fa-xs"></i>
                    <i className="fas fa-circle fa-xs"></i>
                </div>

            </div>
        )
    }
}
const container = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // backgroundColor: '#fafafa',
    height: '430px',
    fontFamily: `'Varela Round', sans-serif`,
    paddingTop: '20px',
    color: 'black'
}
const container2 = {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '40px'
}
const button1 = {
    marginRight: '25px'
}
const dots = {
    marginTop: '40px'
}

const pic = {
    height: '135px',
    width: '105px',
    borderRadius: '50%',
    boxShadow: '10px 8px 20px -15px #000',
    marginTop: '30px'
}

const location = {
    marginTop: '15px'
}



export default Pic;