const routes = require('next-routes');

// module.exports = routes().add('teams', '/teams/:teamId');
// module.exports = routes().add('myteams', '/myteams/:teamId');
module.exports = routes()
    .add({
        name: "teams",
        pattern: "/teams/:teamId",
        page: "teams"
    })
    .add({
        name: "teach",
        pattern: "/teach/:teamId",
        page: "teach"
    })
    .add({
        name: "myteams",
        pattern: "/myteams/:teamId",
        page: "myteams"
    });