import React from 'react';

function Project4() {
    return(
        <div style={style}>
            <strong>
                If you're like me, I forget if I am on leg-day or chest-day. 
                This application simplifies your workouts.
                It reminds you you're next work-out and logs all details of your training.
            </strong>
            
            <div style={space1}></div>
            
            <div>
               This is a simple CRUD app with local storage implementation.
               The reason for local storage is for its efficiency in writing and reading data.
               The result of it is a light-weight and easy to use application.
            </div>

            <div style={space1}></div>

            <div>
               The biggest challenge for this application is figuring out the perfect schema. 
               Though it uses local storage, there are three main components that needs consideration.
               The first is the list of workouts, secondly the reminder for the next workout and lastly the comment section.
               I was able to save all the information with the date representing the key value. 
               As a result, all data is kept according to its date and accomplished data persistence.
            </div>

            <div style={space1}></div>    


            <img 
                src='https://firebasestorage.googleapis.com/v0/b/mvp-360.appspot.com/o/TrainingTracker(2).png?alt=media&token=e5844c77-4d24-4f95-a6cd-370d816183e8'
                style={img}
                />

            
            <div style={space1}></div>

            <div>
                Interesting part about using local storage is that it is generally quick.
                There is no taxing on the server to interact with the database. 
                It is also interesting to note that the data is stored in the window of the client. 
                When I think of database, it is usually connected with a server. 
                This application was able to take full advantage of using the local storage system.
            </div>

            <div style={space1}></div>

            <img 
                src='https://firebasestorage.googleapis.com/v0/b/mvp-360.appspot.com/o/TrainingTracker(1).png?alt=media&token=8efadbcf-2266-4604-960f-21fb4d52b107'
                style={img}
                />

            <div style={space1}></div>

            <div>
                Technologies used: <i>Javascript, jQuery, local storage system, CSS, HTML  </i>
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

export default Project4;