const axios = require('axios');

const baseUrl = 'http://localhost:8080'

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

function getRooms(){

}


module.exports = {
    onLogin,
    getRooms
}
