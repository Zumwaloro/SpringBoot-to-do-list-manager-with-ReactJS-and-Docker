import React from 'react';
import logo from '../logo.svg';
import axios from 'axios';

class Header extends React.Component {

    constructor(props) {
       super(props);
       this.state = {
           text: "Welcome."
       }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/')
        .then(response => {
            return response.data;
        })
        .then(data => {
            this.setState({text: data});
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    render() {
        let styling = {
            paddingTop: 10,
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            gridGap: '5px',
        }
        return(
            <header className="App-header">
                <div style={styling}>
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                      {this.state.text}
                    </p>
                </div>
            </header>
        );
    }
}

export default Header;