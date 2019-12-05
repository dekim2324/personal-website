import React, { Component } from 'react';
import Header from './Header.jsx';
import Pic from './Pic.jsx';
import Form from './Form.jsx';
import SuccessMsg from './SuccessMsg.jsx';
import SocialMedia from './SocialMedia.jsx';

class App extends Component {
    constructor(props) {
        super();

        this.state = {
            forum: 'home'
        }
    }

    handleForumChange() {
        this.setState({
            forum: 'form'
        })
    }

    handleFormSent() {
        this.setState({
            forum: 'congrats'
        })
    }

    handleHome() {
        this.setState({
            forum: 'home'
        })
    }

    render() {

        const forum = this.state.forum;
        
        if(forum === 'home') {
            return (
                <div style={style}> 
                    <Header/>
                    <Pic handleForumChange={() => this.handleForumChange()}/>
                    <SocialMedia />
                </div>
            )
        }
        if(forum === 'form') {
            return(
                <div style={style}>
                    <Header />
                    <Form handleFormSent={() => this.handleFormSent()}/>
                </div>
            )
        }
        if(forum === 'congrats') {
            return(
                <div style={style}>
                    <Header />
                    <SuccessMsg handleHome={() => this.handleHome()}/>
                </div>
            )
        }
        
    }
}

const style = {
    backgroundColor: '#fafafa'
}

export default App;