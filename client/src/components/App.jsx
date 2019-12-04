import React, { Component } from 'react';
import Header from './Header.jsx';
import Pic from './Pic.jsx';
import Form from './Form.jsx';

class App extends Component {
    constructor(props) {
        super();

        this.state = {
            forum: false
        }
    }

    handleForumChange() {
        this.setState({
            forum: true
        })
    }

    render() {
        const forum = this.state.forum;
        if(!forum) {
            return (
                <div>
                    <Header/>
                    <Pic handleForumChange={() => this.handleForumChange()}/>
                </div>
            )
        }
        if(forum) {
            return(
                <div>
                    <Header />
                    <Form />
                </div>
            )
        }
        
    }
}

export default App;