import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'fhirclient';

const SuperDuper = (props) => {
    console.log("joe");

    return (
        <div></div>
    );
    /**/
};

class Yay extends React.Component {
    render() {
        return (
            <div>
                Joe Rocks
            </div>
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {person: []};
    }

    componentDidMount() {
        this.PatientList();
    }

    PatientList() {

        window.FHIR.oauth2.ready((smart) => {
            console.log("yay!");

            let patient = smart.patient;
            let pt = patient.read().then(
                (({patients}) => {
                    console.log(patients)
                })
            );
            //
            // // let
            // $.when(pt).done(function(patient)
            // {
            //
            // });
        });

    }


    render() {
        return (
            <div className="App">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Let's see if it renders the app now
                </p>
                <Yay/>
                /*<SuperDuper/>*/
            </div>
        );
    }
}

const Patient = (props) => {
    return (
        <div style={{margin: '1em'}}>
            <div style={{display: 'inline-block', marginLeft: 10}}>
                <div style={{fontSize: '1.25em', fontWeight: 'bold'}}>{props.name}</div>
                <div>{props.company}</div>
            </div>
        </div>
    );
};

export default App;
