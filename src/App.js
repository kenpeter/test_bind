import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';

import Modal from 'react-responsive-modal';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isModelOpen: false
        }
    }

    mydata() {
        let arr = [
            {
                id: 43,
                date: "Nov 26, 2018",
            },
            {
                id: 42,
                date: "Nov 26, 2018",
            },
            {
                id: 41,
                date: "Nov 26, 2018",
            },
        ];

        return arr;
    }

    modalNoButton() {
        this.setState({ isModelOpen: false });
    }

    modalYesButton(objId, date) {

        // test
        console.log('-- modalYesButton --');
        console.log(objId);
        console.log(date);
        this.setState({isModelOpen: false});
    }

    onOpenModal() {
        this.setState({ isModelOpen: true });
    }

    onCloseModal() {
        this.setState({ isModelOpen: false });
    }

    createActionHtml(objId, date) {
        let {isModelOpen} = this.state;
        let pointerStyle = {
            cursor: 'pointer'
        };

        let bigMarginStyle = {
            marginTop: '30px'
        }

        return (
            <div>
                <div className='myPointer'>
                    <a onClick={this.onOpenModal.bind(this)} style={pointerStyle}>click me objId: {objId}</a>
                </div>
                <Modal open={isModelOpen} onClose={this.onCloseModal.bind(this)}>

                    <div style={bigMarginStyle}>
                        popup
                    </div>

                    <div className='row'>
                        <div className='col xs-6'>
                            <button
                                onClick={() => {this.modalYesButton(objId, date)}}
                            >
                                Yes
                            </button>
                        </div>

                        <div className='col xs-6'>
                            <button
                                onClick={this.modalNoButton.bind(this)}
                            >
                                No
                            </button>
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }

    myhistory() {
        let arr = this.mydata();
        let html = arr.slice(0, 2).map((obj, index) => {
            let objId = obj.id;
            let date = obj.date;
            let actionHtml = this.createActionHtml(objId, date);

            return (
                <div key={index}>
                    {actionHtml}
                </div>
            );
        });

        return html;
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    header
                </header>

                {this.myhistory()}
            </div>
        );
    }
}

export default App;
