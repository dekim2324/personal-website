import React from 'react';

function CopyRight() {
    return(
        <div style={style}>
            <i className="far fa-copyright"></i> <span style={name}>2020 Built by Dennis Kim</span>
        </div>
    )
}
const style = {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#ddd',
    height: '30px'
};
const name = {
    fontSize: '12px'
}

export default CopyRight;