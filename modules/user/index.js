var users = [{
    id: 1,
    username: 'dido',
    password: 'epich'
}, {
    id: 2,
    username: 'kiki',
    password: 'epich'
}, {
    id: 3,
    username: 'tisho',
    password: 'epich'
}];
module.exports = {
    init: function(b) {

    },
    get: function(msg) {
        if (msg && msg.id) {
            return Promise.resolve(users[msg.id]);
        } else {
            return Promise.resolve(users);
        }
    }
};
