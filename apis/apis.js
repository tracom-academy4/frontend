const axios = require('axios');

const baseUrl = 'http://192.168.254.125:8080'
const token =  'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTYyNDY1MDE5NCwiaWF0IjoxNjI0NjE0MTk0fQ.M0xeYdyHNNmGDf19hah-pW9bI1VNApRKEc92zRipLfs'

//POST LOGIN
async function onLogin(username, password) {

    var data = JSON.stringify({
        "username": username,
        "password": password
    });

    var config = {
        method: 'post',
        url: baseUrl + '/login',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    const response = await axios(config)
    console.log(JSON.stringify(response.data));
}


/*
ROOMS
ROOMS
ROOMS
*/


//GET ROOMS ... -> frontend(room)
async function getRooms() {
    var axios = require('axios');

    var config = {
      method: 'get',
      url: baseUrl + '/api/rooms',
      headers: { 
        'Authorization': 'Bearer ' + token
      }
    };
    
    const resp = await axios(config)
    return resp.data;
    
}

//POST ROOMS ... -> frontend(createRoom)
async function postRooms(roomId, capacity, phoneConferenceDescription, roomName, tvDescription, whiteBoardDescription) {
    var axios = require('axios');
    var data = JSON.stringify({
        "roomId": roomId,
        "capacity": capacity,
        "room_name": roomName,
        "tvDescription": tvDescription,
        "whiteBoardDescription": whiteBoardDescription,
        "phone_conference_description": phoneConferenceDescription,
    });

    var config = {
        method: 'post',
        url: baseUrl + '/api/createboardroommeetings',
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        },
        data: data
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });

}

//PUT  ... -> frontend(roomManage)
async function updateRooms(roomId, capacity, phoneConferenceDescription, roomName, tvDescription, whiteBoardDescription){
    var axios = require('axios');
    var data = JSON.stringify({
        "roomId": roomId,
        "capacity": capacity,
        "room_name": roomName,
        "tvDescription": tvDescription,
        "whiteBoardDescription": whiteBoardDescription,
        "phone_conference_description": phoneConferenceDescription,
    });

    var config = {
        method: 'put',
        url: baseUrl + '/api/room',
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        },
        data: data
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        }); 
}

//DELETE ROOMS ... doesn't appear to be used in the context of rooms... try events!! 
async function deleteRooms(room_id) {
    var axios = require('axios');
    var data = JSON.stringify({
        "room_id": room_id
    });

    var config = {
        method: 'delete',
        url: baseUrl + '/api/createboardroommeetings',
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        },
        data: data
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });

}

/*
USERS
USERS
USERS
*/

//GET USERS
async function getUser() {
    var axios = require('axios');
    var data = JSON.stringify({});

    var config = {
        method: 'get',
        url: baseUrl + '/api/user/{userid}',
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        },
        data: data
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
}

//GET ALL USERS
async function getAllUser() {
    var axios = require('axios');
    var data = JSON.stringify({});

    var config = {
        method: 'get',
        url: baseUrl + '/api/user',
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        },
        data: data
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
}

//POST NEW USER
async function newUserCreate(firstmeNa, secondName, email, telephone, organization, role, password, confirmPassword) {

    var data = JSON.stringify({
        "First Name": firstName,
        "Second Name": secondName,
        "Email": email,
        "telephone": telephone,
        "Organization": organization,
        "Role": role,
        "Password": password,
        "Confirm Password": confirmPassword

    });

    var config = {
        method: 'post',
        //
        url: baseUrl + '/?',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    const response = await axios(config)
    console.log(JSON.stringify(response.data));

}

/*
EVENTS
EVENTS
EVENTS
*/


// GET EVENT 
async function getBoardRoomMeeting() {
    var axios = require('axios');
    var data = '';

    var config = {
        method: 'get',
        url: baseUrl + '/api/event/{eventid}',
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        },
        data: data
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });


}

//GET ALL EVENTS
async function getAllEvents() {
    var axios = require('axios');
    var data = '';

    var config = {
        method: 'get',
        url: baseUrl + '/api/events',
        headers: {
            'Authorization': 'Bearer ' + token,
        },
        data: data
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
}

//POST EVENT
async function postEvent(event_id, meeting_end_date, meeting_start_date, capacity, description, repetitive, topic) {
    var axios = require('axios');
    var data = JSON.stringify({
        "event_id": event_id,
        "meeting_end_date": meeting_end_date,
        "meeting_start_date" : meeting_start_date,
        "capacity" : capacity,
        "description" : description,
        "repetitive" : repetitive,
        "topic" : topic
    });

    var config = {
        method: 'post',
        url: baseUrl + '/api/createevent',
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        },
        data: data
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });

}

//PUT EVENT AKA UPDATE
async function putEvent(event_id, meeting_end_date, meeting_start_date, capacity, description, repetitive, topic) {
    var axios = require('axios');
    var data = JSON.stringify({
        "event_id": event_id,
        "meeting_end_date": meeting_end_date,
        "meeting_start_date" : meeting_start_date,
        "capacity" : capacity,
        "description" : description,
        "repetitive" : repetitive,
        "topic" : topic
    })

    var config = {
        method: 'put',
        url: baseUrl + '/api/eventt',
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        },
        data: data
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });

}

//DELETE EVENT
async function delEvents(event_id) {
    var axios = require('axios');
    var data = '';

    var config = {
        method: 'delete',
        url: baseUrl + '/api/deleteevent',
        headers: {
            'Authorization': 'Bearer ' + token,
        },
        data: data
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });


}


/*
COMPANY
COMPANY
COMPANY
*/


//GET COMPANY
async function getCompany() {
    var axios = require('axios');
    var data = JSON.stringify({
        "company_id": company_id,
        "company_name": company_name
    });

    var config = {
        method: 'get',
        url: baseUrl + '/?',
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        },
        data: data
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
}

//POST COMPANY
async function postCompany(company_id, company_name) {
    var axios = require('axios');
    var data = JSON.stringify({
        "company_id": company_id,
        "company_name": company_name
    });

    var config = {
        method: 'post',
        url: baseUrl + '/?',
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        },
        data: data
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
}

module.exports = {
    onLogin,
    getAllUser,
    getRooms,
    postRooms,
    updateRooms,
    newUserCreate,
    getAllEvents,
    getBoardRoomMeeting,
    postEvent,
    putEvent,
    delEvents
}
