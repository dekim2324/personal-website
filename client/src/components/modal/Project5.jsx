import React from 'react';

function Project5() {
    return(
        <div style={style}>
            <strong>
                It is a minimalistic application fetching data for twitter feed.
                The focus is on using API with emphasis on design.
            </strong>
            
            <div style={space1}></div>
            
            <div>
               A big focus is implementing API and some CSS. 
               In order to give the user and great experience, time was spent on animations and effects using CSS.
               The result is a beautiful twiddler application.
            </div>

            <div style={space1}></div>

            <div>
               The logical data to show to the clients is the most up-to date newsfeed. 
               In order to accomplish that, I needed to fetch the data using API and retrieve it according to the latest news.
               I was able to accomplish that by filtering through and showing the 10 most recent news. 
            </div>

            <div style={space1}></div>    


            <img 
                src='https://firebasestorage.googleapis.com/v0/b/mvp-360.appspot.com/o/twiddler(1).png?alt=media&token=ed6ea4c3-d49b-41cc-9288-82f237c2910b'
                style={img}
                />

            
            <div style={space1}></div>

            <div>
                I love to work on CSS as making any application look great is my passion.
                The pink color just gives such a great contrast and gives it a different flavor.
                This was a fun project to do using lots of effects via CSS.
            </div>

            <div style={space1}></div>

            <img 
                src='https://firebasestorage.googleapis.com/v0/b/mvp-360.appspot.com/o/twiddler(2).png?alt=media&token=0cbbedfa-b469-46cb-9f44-5870652f7233'
                style={img}
                />

            <div style={space1}></div>

            <div>
                Technologies used: <i>Javascript, jQuery, CSS, HTML, Data API  </i>
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

export default Project5;