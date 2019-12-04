import React, { Component } from 'react';

class Form extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            email: '',
            msg: ''
        }
    }

    handleSubmit(e) {

        db.collection('emails')
            .add({
                name: `${this.state.name}`,
                email: `${this.state.email}`,
                body: `${this.state.msg}`
            })
            .then(() => this.props.handleFormSent())

    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        }) 
    }

    render() {
        return(
            <div style={style}>

            <div style={form}>
                <form style={inputs}>
                    <div className="form-group">
                        <label>Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="exampleFormControlInput1" 
                            placeholder="" 
                            name='name'
                            onChange={e => this.handleChange(e)}
                            />
                    </div>

                    <div className="form-group">
                        <label>Email address</label>
                        <input 
                            type="email" 
                            name='email'
                            className="form-control" 
                            id="exampleFormControlInput1" 
                            placeholder="name@example.com" 
                            onChange={e => this.handleChange(e)}
                            />
                    </div>


                    <div className="form-group">
                        <label>Message</label>
                        <textarea 
                            name='msg'
                            className="form-control" 
                            id="exampleFormControlTextarea1" 
                            rows="3"
                            onChange={e => this.handleChange(e)}
                            ></textarea>
                    </div>

                    <div style={button}>
                        <button onClick={e => this.handleSubmit(e)} type="button" className="btn btn-outline-dark">Send</button>
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