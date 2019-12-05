import React from 'react';

function TitleProject() {
    return(
        <div style={style}>
            <div>Projects</div>
        </div>
    )
}

const style = {
    backgroundColor: '#ddd',
    height: '200px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: `'Varela Round', sans-serif`,
    fontSize: '20px'
}

export default TitleProject;