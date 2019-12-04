import React, { Component } from 'react';

class Form extends Component {
    constructor() {
        super()
    }

    render() {
        return(
            <div style={style}>

            <div style={form}>
                <form style={inputs}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="" />
                    </div>

                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>


                    <div className="form-group">
                        <label>Message</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>

                    <div style={button}>
                        <button type="button" className="btn btn-outline-dark">Send</button>
                    </div>
                </form>
            </div>

            </div>
        )
    }
}
const style = {
    backgroundColor: '#fafafa',
    height: '430px',
    fontFamily: `'Varela Round', sans-serif`,
    marginTop: '20px'
}

const form = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
}

const inputs = {
    width: '60%',
    marginTop: '40px'
}

const button = {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '30px'
}
export default Form;