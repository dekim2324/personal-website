import React from 'react';


function Projects() {
    return(
        <div style={style}>

            <div style={container1}>
                <div className="card" style={{width: "25rem"}}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/mvp-360.appspot.com/o/Screen%20Shot%202019-12-04%20at%207.45.44%20PM.png?alt=media&token=523fe748-e415-435d-a251-2bc342025ada" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card" style={{width: "25rem"}}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/mvp-360.appspot.com/o/FEC(2).png?alt=media&token=5f544cee-9092-4046-8a51-ad9baefc4504" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card" style={{width: "25rem"}}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/mvp-360.appspot.com/o/SDC(2).png?alt=media&token=877b0a83-88a8-40f5-ad59-b6b99bda20a7" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>

            </div>

            <div style={container2}>
                <div className="card" style={{width: "25rem"}}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/mvp-360.appspot.com/o/TrainingTracker(2).png?alt=media&token=e5844c77-4d24-4f95-a6cd-370d816183e8" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card" style={{width: "25rem"}}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/mvp-360.appspot.com/o/twiddler(1).png?alt=media&token=ed6ea4c3-d49b-41cc-9288-82f237c2910b" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card" style={{width: "25rem"}}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/mvp-360.appspot.com/o/current(1).png?alt=media&token=d5aa7fa8-1413-48d9-8c0b-4cb538a79678" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
  


        </div>
    )
}

const style = {
    paddingTop: '20px',
    backgroundColor: '#ddd',
    height: '900px'
}

const container1 = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
}
const container2 = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '70px'
}


export default Projects;