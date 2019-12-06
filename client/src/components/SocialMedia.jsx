import React from 'react';

function SocialMedia(props) {
    return (
        <div style={style} id='social'>
            
            <i 
            className="social fab fa-linkedin fa-2x"
            onClick={e => handleLinkedIn(e)}
            ></i>
            <i 
            className="social fab fa-instagram fa-2x"
            onClick={e => handleInstagram(e)}
            ></i>
            <i 
            className="social fab fa-github fa-2x"
            onClick={e => handleGithub(e)}
            ></i>
            <i 
            className="social far fa-envelope fa-2x"
            onClick={e => handleEmail(e)}
            ></i>
        
        </div>
    )
}

function handleLinkedIn() {
    window.open('https://www.linkedin.com/in/denniskimprofile/')
};
function handleInstagram() {
    window.open('https://www.instagram.com/dongwookeeee/')
};
function handleGithub() {
    window.open('https://github.com/dekim2324/')
};
function handleEmail() {
    window.open('mailto:dekim2324@gmail.com')
};

const style = {
    display: 'flex',
    flexDirection: 'row',
    // marginTop: '40px',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    height: '80px'
    // color: 'white',
}

export default SocialMedia;