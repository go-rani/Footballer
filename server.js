//firebase auth init
// const admin = require('firebase-admin');
// const serviceAccount = require('./config/serviceAccountKey.json');


// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: 'https://footballer-43d76.firebaseio.com'
// });
const session = require('express-session')
const bodyParser = require('body-parser')
const FileStore = require('session-file-store')(session)
const admin = require('firebase-admin')
const firebase = admin.initializeApp (
    {
        credential: admin.credential.cert(require('./config/serviceAccountKey.json'))
    },
    'server'
)

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
    
    server.use(bodyParser.json())
    server.use(
        session({
            secret: 'geheimnis',
            saveUninitialized: true,
            store: new FileStore({ secret: 'geheimnis' }),
            resave: false,
            rolling: true,
            httpOnly: true,
            cookie: { maxAge: 604800000 } // week
        })
    )

    server.use((req, res, next) => {
        req.firebaseServer = firebase
        next()
    })

    server.post('/api/login', (req, res) => {
        if (!req.body) return res.sendStatus(400)

        const token = req.body.token
        firebase
            .auth()
            .verifyIdToken(token)
            .then(decodedToken => {
                req.session.decodedToken = decodedToken
                return decodedToken
            })
            .then(decodedToken => res.json({ status: true, decodedToken }))
            .catch(error => res.json({ error }))
    })

    server.post('/api/logout', (req, res) => {
        req.session.decodedToken = null
        res.json({ status: true })
    })

    server.get('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(port, err => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    })
})
