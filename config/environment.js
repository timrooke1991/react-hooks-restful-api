const port    = process.env.PORT || 3030;
const dbURI   = process.env.MONGODB_URI || 'mongodb://localhost/react-hooks-api';
const secret  = process.env.SESSION_SECRET || 'It is a secret';

module.exports = { port, dbURI, secret };
