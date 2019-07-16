//firebase auth init
// const admin = require('firebase-admin');
// const serviceAccount = require('./config/serviceAccountKey.json');

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: 'https://footballer-43d76.firebaseio.com'
// });


//next routes
const next = require('next');
const routes = require('./routes');
const express = require('express');

const port = 3000;
const app = next({dev: process.env.NODE_ENV !== 'production'})
const handle = routes.getRequestHandler(app);
console.log('tt');
app.prepare().then(() => {
    const server = express();
    server.use(handle);

    server.listen(port, err => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
    });
});