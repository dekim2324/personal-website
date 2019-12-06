import React from 'react';

function TitleProject() {
    return(
        <div style={style}>
            <div>Projects</div>
            <div style={more}>Click on images for more info</div>
        </div>
    )
}

const style = {
    backgroundColor: '#ddd',
    height: '200px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: `'Varela Round', sans-serif`,
    fontSize: '25px'
}

const more = {
    fontSize: '12px',
    marginTop: '10px'
}

export default TitleProject;