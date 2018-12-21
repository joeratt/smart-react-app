import React from 'react';
import logo from './logo.svg';
import './App.css';
import FHIR from 'fhirclient';


var ReactRouter = require('react-router-dom');
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var HashRouter = ReactRouter.HashRouter;

const SuperDuper = (props) => {
    console.log("joe");

    return (
        <div>joe</div>
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

    static defaultPatient(){
        return {
            fname: {value: ''},
            lname: {value: ''},
            gender: {value: ''},
            birthdate: {value: ''},
            height: {value: ''},
            systolicbp: {value: ''},
            diastolicbp: {value: ''},
            ldl: {value: ''},
            hdl: {value: ''},
        };
    }

    PatientList() {

        FHIR.oauth2.ready((smart) => {
            console.log("yay!");

            let patient = smart.patient;
            let pt = patient.read().then(
                (({patient}) => {
                    console.log(patient);

                    let gender = patient.gender;

                    let fname = '';
                    let lname = '';

                    let p = App.defaultPatient();
                    p.birthdate = patient.birthDate;
                    p.gender = gender;
                    p.fname = fname;
                    p.lname = lname;

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
