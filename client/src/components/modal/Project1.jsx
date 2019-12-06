import React from 'react';

function Project1() {
    return(
        <div style={style}>
            <strong>
                Inspired by food and cooking, this application allows pictures to persist throughout the calendar year.
            </strong>
            
            <div style={space1}></div>
            
            <div>
               Pictures are a great way to share a part of our lives.  
               Images are hosted on cloud so they persist seamlessly.
               User experience enhanced with clean UI and a beautiful calendar to retrieve data.
            </div>

            <div style={space1}></div>

            <div>
                The front-end is used by React and material UI library for the user experience.
                The difficult part about the project was finding the most efficient way to handle photos.
                Because photos will take up big amount of space, there must be a way to find a light-weight option. 
                The solution I came up with was to host the images on cloud and have the application read only the path to the files.
                This allowed my application to overcome its biggest obstacle in image handling.
            </div>

            <div style={space1}></div>    


            <img 
                src='https://firebasestorage.googleapis.com/v0/b/mvp-360.appspot.com/o/Screen%20Shot%202019-12-04%20at%207.45.44%20PM.png?alt=media&token=523fe748-e415-435d-a251-2bc342025ada'
                style={img}
                />

            
            <div style={space1}></div>

            <div>
                Other architecture of this application was minor compared to handling of images.
                Using dates to store and retrieve data from the database was a challenge as well.
                There were many different date formats. The solution to this was to use a library called moment.js 
                which makes unifying key / value pairs much more simple. 
            </div>

            <div style={space1}></div>

            <img 
                src='https://firebasestorage.googleapis.com/v0/b/mvp-360.appspot.com/o/Screen%20Shot%202019-12-05%20at%209.43.42%20AM.png?alt=media&token=e8e5ea25-2bf4-45f0-a8b7-eb1e0efdd0a8'
                style={img}
                />

            <div style={space1}></div>

            <div>
                Technologies used: <i>Javascript, React.js, Express, Firebase / Cloud Storage / Firestore, Webpack, Babel, moment.js, Material UI </i>
            </div>

            <div style={space1}></div>

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

export default Project1;