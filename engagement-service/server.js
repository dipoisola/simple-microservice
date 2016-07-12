var grpc = require('grpc');
var needle = require('needle');
var server = new grpc.Server();
var engagementProto = grpc.load('proto/engagement.proto');
server.addProtoService(engagementProto.Engagement.EngagementService.service, {
  listUsers: function (call, callback) {
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
