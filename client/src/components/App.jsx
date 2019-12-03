import React, { Component } from 'react';
import Header from './Header.jsx';
import Pic from './Pic.jsx';

class App extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div>
                <Header />
                <Pic />
            </div>
        )
    }
}

export default App;