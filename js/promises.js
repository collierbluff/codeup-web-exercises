"use strict";

function wait(delay){

    return new Promise((resolve) =>
    {setTimeout(()=> {resolve()}, delay)});
}


const gitHubApiKey = 'efeb596a33d5f7070c11ecdd585ba4733eed337d';

function gitHubLookUpLastPush(username){

    return new Promise((resolve)=>{

        fetch('https://api.github.com/users/' + username + '/events/public', {headers: {'Authorization': 'token ' + gitHubApiKey}})
            .then(response => response.json())
            .then(response => resolve(response[0].created_at));
        });
}



