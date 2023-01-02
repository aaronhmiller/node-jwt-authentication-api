const { expressjwt } = require('express-jwt');
const fs = require('fs');

module.exports = jwt;

function jwt() {
    var cert = fs.readFileSync("../certs/cert.pem");
    return expressjwt({ secret: cert, algorithms: ['RS256'] }).unless({
        path: [
            // public routes that don't require authentication
            '/users/authenticate'
        ]
    });
}
