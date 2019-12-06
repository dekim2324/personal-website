import React from 'react';

function Navs(props) {
    return(
        <div style={style}>
            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link active" href="#" onClick={() => props.handleHome()}>Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#social" onClick={() => props.handleHome()}>Social Media</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#projects" onClick={() => props.handleHome()}>Projects</a>
                </li>
            </ul>
        </div>
    )
}

const style = {
    backgroundColor: 'white',
    fontFamily: `'Varela Round', sans-serif`,
    display: 'flex',
    justifyContent: 'flex-end',
    paddingRight: '10%',
    height: '50px'
}

export default Navs;