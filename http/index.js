var bus;
module.exports = {
    type: 'http',
    routes: [{
        path: '/rpc2',
        method: '*',
        handler: function(req, reply) {
            bus;
            return reply('The page was not found').code(404);
        }
    }],
    init: function(b) {
        bus = b;
    }
};