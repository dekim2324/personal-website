import React, { Component, useState } from 'react';
import { Modal, Button, ButtonToolbar } from 'react-bootstrap';
import Project1 from './modal/Project1.jsx';
import Project2 from './modal/Project2.jsx';
import Project3 from './modal/Project3.jsx';
import Project4 from './modal/Project4.jsx';
import Project5 from './modal/Project5.jsx';
import Project6 from './modal/Project6.jsx';

function Projects() {
    
    const [lgShow, setLgShow] = useState(false);
    const [lgShow1, setLgShow1] = useState(false);
    const [lgShow2, setLgShow2] = useState(false);
    const [lgShow3, setLgShow3] = useState(false);
    const [lgShow4, setLgShow4] = useState(false);
    const [lgShow5, setLgShow5] = useState(false);

    return(
        <div style={style}>

            <div style={container1}>
                <div className="card" style={{width: "25rem"}}>
                    <img 
                    onClick={() => setLgShow(true)}
                    src="https://firebasestorage.googleapis.com/v0/b/mvp-360.appspot.com/o/Screen%20Shot%202019-12-04%20at%207.45.44%20PM.png?alt=media&token=523fe748-e415-435d-a251-2bc342025ada" 
                    className="card-img-top" 
                    alt="..." 
                    
                    />
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card" style={{width: "25rem"}}>
                    <img 
                    onClick={() => setLgShow1(true)}
                    src="https://firebasestorage.googleapis.com/v0/b/mvp-360.appspot.com/o/FEC(2).png?alt=media&token=5f544cee-9092-4046-8a51-ad9baefc4504" 
                    className="card-img-top" 
                    alt="..." />
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card" style={{width: "25rem"}}>
                    <img 
                    onClick={() => setLgShow2(true)}
                    src="https://firebasestorage.googleapis.com/v0/b/mvp-360.appspot.com/o/SDC(2).png?alt=media&token=877b0a83-88a8-40f5-ad59-b6b99bda20a7" 
                    className="card-img-top" 
                    alt="..." />
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>

            </div>

            <div style={container2}>
                <div className="card" style={{width: "25rem"}}>
                    <img 
                    onClick={() => setLgShow3(true)}
                    src="https://firebasestorage.googleapis.com/v0/b/mvp-360.appspot.com/o/TrainingTracker(2).png?alt=media&token=e5844c77-4d24-4f95-a6cd-370d816183e8" 
                    className="card-img-top" 
                    alt="..." />
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card" style={{width: "25rem"}}>
                    <img 
                    onClick={() => setLgShow4(true)}
                    src="https://firebasestorage.googleapis.com/v0/b/mvp-360.appspot.com/o/twiddler(1).png?alt=media&token=ed6ea4c3-d49b-41cc-9288-82f237c2910b" 
                    className="card-img-top" 
                    alt="..." />
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card" style={{width: "25rem"}}>
                    <img 
                    onClick={() => setLgShow5(true)}
                    src="https://firebasestorage.googleapis.com/v0/b/mvp-360.appspot.com/o/current(1).png?alt=media&token=d5aa7fa8-1413-48d9-8c0b-4cb538a79678" 
                    className="card-img-top" 
                    alt="..." />
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>


            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
                >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                    iCook365
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Project1></Project1>
                </Modal.Body>
            </Modal>

            <Modal
                size="lg"
                show={lgShow1}
                onHide={() => setLgShow1(false)}
                aria-labelledby="example-modal-sizes-title-lg"
                >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                    ShareBnB
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Project2></Project2>
                </Modal.Body>
            </Modal>

            <Modal
                size="lg"
                show={lgShow2}
                onHide={() => setLgShow2(false)}
                aria-labelledby="example-modal-sizes-title-lg"
                >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                    Pi-Kea
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Project3></Project3>    
                </Modal.Body>
            </Modal>

            <Modal
                size="lg"
                show={lgShow3}
                onHide={() => setLgShow3(false)}
                aria-labelledby="example-modal-sizes-title-lg"
                >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                    Training Tracker
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>...</Modal.Body>
            </Modal>

            <Modal
                size="lg"
                show={lgShow4}
                onHide={() => setLgShow4(false)}
                aria-labelledby="example-modal-sizes-title-lg"
                >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                    Twiddler
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>...</Modal.Body>
            </Modal>

            <Modal
                size="lg"
                show={lgShow5}
                onHide={() => setLgShow5(false)}
                aria-labelledby="example-modal-sizes-title-lg"
                >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                    Dennis Personal Web
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>...</Modal.Body>
            </Modal>

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