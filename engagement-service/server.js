var grpc = require('grpc');
var needle = require('needle');
var server = new grpc.Server();
var engagementProto = grpc.load('proto/engagement.proto');
server.addProtoService(engagementProto.Engagement.EngagementService.service, {
  listUsers: function (call, callback) {
    // needle.get('https://api.github.com/users/andela-gjames/repos?per_page=100',
    // function (err, reply) {
    //   callback(null, reply);
    // });
    // ({id: 1, name: 'unknown', email: 'email'}).then(function (resources) {
    //   console.log(resources);
    //   callback(null, resources);
    // }).then(function (err) {
    //   console.log(resources);
    //   callback(err);
    // });

    callback(null, [{
        id: 1,
        name: "Sade Owolabi",
        email: "hello@maildrop.cc"
    }, {
        id: 2,
        name: "New guy",
        email: "okay@maildrop.cc"
    }]);
  }
});

server.bind('127.0.0.1:7000', grpc.ServerCredentials.createInsecure());

server.start();
