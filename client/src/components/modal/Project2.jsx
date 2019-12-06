import React from 'react';

function Project1() {
    return(
        <div style={style}>
            <strong>
                A good code is a code that is tested and gives clients a great experience.
                This app is a platform designed for lodging-arrangements.
            </strong>
            
            <div style={space1}></div>
            
            <div>
               An application built by 4 engineers who collaborated and unit-tested the codes.
               A code-base well tested will prevent major bugs.
            </div>

            <div style={space1}></div>

            <div>
               Working in groups of four teams meant that team effort was crucial in making this application function properly.
               We used agile practices, most notably daily-stand ups, to glue the team together and make major progress.
               Sometimes, piar-programming would help get a member unstuck and we were able to fix minor issues.
               The biggest challenge for us was writing tests for test driven development. The idea of writing tests before coding
               was not second-nature to us. However, with Jest and Enzym configured, we were able to catch some steam and write
               strong unit tests. The outcome is a great user experience.
            </div>

            <div style={space1}></div>    


            <img 
                src='https://firebasestorage.googleapis.com/v0/b/mvp-360.appspot.com/o/FEC(2).png?alt=media&token=5f544cee-9092-4046-8a51-ad9baefc4504'
                style={img}
                />

            
            <div style={space1}></div>

            <div>
                We divided our work into four separate services. This meant more modularity but also brought some challenges when putting the services
                together. The solution was to set up proxy server and host it on amazon ec2. There were some glitches initially such as 
                the application working on one user and not the other. The issue was with CSS and we were able to overcome it with styled-component which 
                gave the code unity. 
            </div>

            <div style={space1}></div>

            <div>
                Technologies used: <i>Javascript, React.js, Express, Mongo, Mongoose, Enzyme, Jest, AWS EC2, Styled-Components, Webpack, Babel </i>
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