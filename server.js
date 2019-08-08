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

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
// const port = 80;
// const app = next({ dev: false });
// const port = 3000;
// const app = next({dev: process.env.NODE_ENV !== 'production'})
const handle = routes.getRequestHandler(app);

app.prepare().then(() => {
    const server = express();
    // server.use(handle);

    server.get('/teams/:teamId', (req, res) => {
        const actualPage = '/teams'
        const queryParams = { title: req.params.id }
        app.render(req, res, actualPage, queryParams)
    })

    server.get('/teach/:teamId', (req, res) => {
        const actualPage = '/teach'
        const queryParams = { title: req.params.id }
        app.render(req, res, actualPage, queryParams)
    })

    server.get('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(port, err => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
    });
});