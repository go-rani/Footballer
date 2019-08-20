//firebase auth init
// const admin = require('firebase-admin');
// const serviceAccount = require('./config/serviceAccountKey.json');

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: 'https://footballer-43d76.firebaseio.com'
// });


//next routes
const express = require('express')
const next = require('next')

const port = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    const server = express()

    server.get('/teach/:id', (req, res) => {
        return app.render(req, res, '/teach', { id: req.params.id })
    })

    server.get('/teams/:id', (req, res) => {
        return app.render(req, res, '/teams', { id: req.params.id })
    })

    server.get('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(port, err => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    })
})
