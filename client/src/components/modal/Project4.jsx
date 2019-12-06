import React from 'react';

function Project4() {
    return(
        <div style={style}>
            <strong>
                Inspired by food and cooking, this application allows pictures to persist throughout the calendar year.
            </strong>
            
            <div style={space1}></div>
            
            <div>
               Pictures are a great way to share a part of our lives.  
            </div>

            <div style={space1}></div>

            
            <img 
                src='https://firebasestorage.googleapis.com/v0/b/mvp-360.appspot.com/o/Screen%20Shot%202019-12-04%20at%207.45.44%20PM.png?alt=media&token=523fe748-e415-435d-a251-2bc342025ada'
                style={img}
                />

            <div style={space1}></div>

            <div>
                Technologies used: <i>hello</i>
            </div>

            <div style={space1}></div>

            <img 
                src='https://firebasestorage.googleapis.com/v0/b/mvp-360.appspot.com/o/Screen%20Shot%202019-12-05%20at%209.43.42%20AM.png?alt=media&token=e8e5ea25-2bf4-45f0-a8b7-eb1e0efdd0a8'
                style={img}
                />

        </div>
    )
}

const style = {
    fontSize: '14px'
}

const space1 = {
    height: '20px'
}

const img = {
    width: '100%'
}

export default Project4;