import 'fhirclient';

console.log("authorizing");

Window.FHIR.oauth2.authorize({
    'client_id': 'b65d7ea8-73ef-4892-ad22-21a21c0b4c1b',
    'scope':  'patient/Patient.read patient/Observation.read launch online_access openid profile'
});