const axios = require('axios');
const fs = require('fs');
const config = require('./config.json');

async function main(){
    try{
        //Generates a random email
        const email = emailGenerator()
        await generateAccount(email);
        fs.appendFile('accounts.txt', `${email}:SubwayBot@123\r\n`, function (err) {
            if (err) {
                console.log('Failed to write account to file. Your account is:', `${email}:SubwayBot@123`);
            }else{
                console.log('Successfully generated account');
            }
        })
    }catch(err){
        console.error('An Error Ocurred:', err);
    }
}

//Function behind generating the subway account
async function generateAccount(email){
    try{
        const postData = {
            'lastName' : 'Doe',
            'channelApp' : 0,
            'mobile' : '',
            'channelSMS' : 0,
            'password' : 'SubwayBot@123',
            'typeCompetitions' : 1,
            'email' : email,
            'birthDate' : '01-06-2000',
            'channelEmail' : 0,
            'countryId' : 5,
            'typeOffer' : 1,
            'firstName' : 'John',
            'typeNew' : 1
        }
        const headers = {
            'Content-Type' : 'application/json',
            'modulecode' : 'SUB_STORMBORN'
        }
        await axios.post('https://rewards.subway.co.uk/tx-sub/registration', postData, {headers : headers});
    }catch(err){
        throw err;
    }
}

//Generates random character to use plus trick on your email
function emailGenerator(){
    let randomString = '+';
    const possibleCharacters = 'abcdefghijklmnopqrstuvwxyz1234567890'
    const amountOfCharacters = (Math.ceil(Math.random() * 6)) + 4;
    //Generates a random string to use in the plus trcik
    for (let i = 0; i < amountOfCharacters; i++){
        const randomCharacterIndex = Math.floor(Math.random() * possibleCharacters.length);
        const randomCharacter = possibleCharacters[randomCharacterIndex];
        randomString += randomCharacter;
    }
    //Splits the @gmail.com so plus trick can be done
    const emailSplit = config.email.split('@');
    //Adds the random string to the first part of the email
    const emailPartOne = emailSplit[0] + randomString;
    //Add the @gmail.com part back
    const email = emailPartOne + '@' + emailSplit[1];
    return email;
}   

if(!config.email){
    console.log('Please fill in your email in the config.json file. It also must be a gmail for the bot to work.');
    process.exit(1);
}

main();

