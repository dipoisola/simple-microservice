var express = require('express');
var grpc = require('grpc');
var app = express();

// var engagementProto = grpc.load('proto/engagement.proto');
//
// var client = new engagementProto.Engagement.EngagementService('127.0.0.1:7000',
// grpc.credentials.createInsecure());

var engagementProto = grpc.load('proto/engagement.proto');

var client = new engagementProto.Engagement.EngagementService( '127.0.0.1:7000',
grpc.credentials.createInsecure());



// console.log(client);
app.get('/', function (req, res) {
    client.listUsers({}, function (err, result) {
      res.send(result);
    });
});

app.listen(8000, function () {
  console.log('application listening at 8000');
})
