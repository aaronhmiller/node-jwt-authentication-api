﻿const jwt = require('jsonwebtoken');
const fs = require('fs');

// users hardcoded for simplicity, store in a db for production applications
const users = [{ id: 1, username: 'test', password: 'test', firstName: 'Test', lastName: 'User' }];

module.exports = {
    authenticate,
    getAll
};

async function authenticate({ username, password }) {
    const user = users.find(u => u.username === username && u.password === password);

    if (!user) throw 'Username or password is incorrect';

    const privateKey = fs.readFileSync('../keys/key.pem');
    // create a jwt token that is valid for 15 mins
    const token = jwt.sign({ sub: user.id }, privateKey, { algorithm: 'RS256', expiresIn: process.env.JWT_EXPIRES_IN || '15m' });

    return {
        ...omitPassword(user),
        token
    };
}

async function getAll() {
    return users.map(u => omitPassword(u));
}

// helper functions

function omitPassword(user) {
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
}
