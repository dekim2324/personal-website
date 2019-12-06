import React from 'react';

function Project6() {
    return(
        <div style={style}>
            <strong>
                This is my personal website made from scratch. 
                It does not use any boiler or template. All functionality is coded.
            </strong>
            
            <div style={space1}></div>
            
            <div>
                This website is meant to represent myself and my work. 
                Clients can easily browse through and interact with more with the features. It is designed for simplicity and usability.
            </div>

            <div style={space1}></div>

            <div>
                I personally think that hosing any media-related data on cloud is the most efficient and hassle-free way.
               My resumé is hosted on cloud so that when the client clicks on it, it simply redirects to the hosted URL.
               Another interesting thing is the message section. The messages, upon sending, goes into a cloud database.
               What I am working on is, to try to have the message relay directly into my gmail account.
            </div>

            <div style={space1}></div>    


            <img 
                src='https://firebasestorage.googleapis.com/v0/b/mvp-360.appspot.com/o/current(1).png?alt=media&token=d5aa7fa8-1413-48d9-8c0b-4cb538a79678'
                style={img}
                />

            
            <div style={space1}></div>

            <div>
                The most fun part for me was making the website interactive. 
                To do this in React.js, you can use conditional rendering to render components that are necessary.
                That is the power of React - you can divide your code into reusable components.
                Another fun part, is using libraries like bootstrap to enhance the user experience.
            </div>

            <div style={space1}></div>

            <img 
                src='https://firebasestorage.googleapis.com/v0/b/mvp-360.appspot.com/o/current(2).png?alt=media&token=fddd7808-8c44-42fb-aa45-888c917e16d1'
                style={img}
                />

            <div style={space1}></div>

            <div>
                Technologies used: <i>Javascript, CSS, Bootstrap, HTML, React, React Hooks, Express, Firebase / Firestore / Cloud Storage, Webpack, Babel   </i>
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

export default Project6;