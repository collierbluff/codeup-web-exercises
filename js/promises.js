"use strict";

function wait(millisecondDelay){

    return new Promise((resolve) =>
    {setTimeout(() => {resolve()}, millisecondDelay)});
}






const gitHubApiKey = 'efeb596a33d5f7070c11ecdd585ba4733eed337d';

function gitHubLookUpLastPush(username){

    return new Promise((resolve)=>{

        fetch('https://api.github.com/users/' + username + '/events/public', {headers: {'Authorization': 'token ' + gitHubApiKey}})
            .then(response => response.json())
            .then(response => resolve(response[0].created_at));
        });
}

console.log(gitHubLookUpLastPush('collierbluff'));



