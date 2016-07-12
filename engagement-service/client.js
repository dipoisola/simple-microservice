var grpc = require('grpc');
var engagementProto = grpc.load('proto/engagement.proto');

var client = new engagementProto.Engagement.EngagementService( '127.0.0.1:7000',
grpc.credentials.createInsecure());
client.listUsers({}, function (err, res) {
  console.log(err, res);
});
