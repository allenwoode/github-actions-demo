import React from 'react';
import './Toggle.css';

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: props.isToggleOn};
        this.state = {url: props.url, message: 'message'};

        this.handleClick = this.handleClick.bind(this);
        this.handleRequest = this.handleRequest.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
        //this.handleRequest();
    }

    handleRequest() {
        //console.log('request url:', this.state.url);
        fetch(this.state.url)
            .then(res => res.text())
            .then(text => {
                console.log('text:', text)
                this.setState({message: text})
            })
            .catch(e => {
                console.error(e)
            })
    }

    render() {
        return (
            <div className="Toggle">
               {/* <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button> */}
                <div className="Toggle-button">
                    <button onClick={this.handleRequest}>
                        {this.props.name}
                    </button>
                    <p>{ this.state.message }</p>
                </div>
            </div>
            
        )
    }
}

export default Toggle;