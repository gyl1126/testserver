var AWS = require("aws-sdk")

let awsConfig = {
    "region" : "ap-northeast-2",
    "endpoint" : "http://dynamodb.ap-northeast-2.amazonaws.com",
    "accessKeyId" : "AKIASMGVNLXC4BG7IXXW", "secretAccessKey" : "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"
};
AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();

let modify = function () {

    
    var params = {
        TableName: "Test",
        Key: { "id": "write_new" },
        UpdateExpression: "set updated_by = :byUser, is_deleted = :boolValue",
        ExpressionAttributeValues: {
            ":byUser": "updateUser",
            ":boolValue": true
        },
        ReturnValues: "UPDATED_NEW"

    };
    docClient.update(params, function (err, data) {

        if (err) {
            console.log("Test::update::error - " + JSON.stringify(err, null, 2));
        } else {
            console.log("Test::update::success "+JSON.stringify(data));
        }
    });
}

modify();
        