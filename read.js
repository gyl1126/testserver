var AWS = require("aws-sdk")

let awsConfig = {
    "region" : "ap-northeast-2",
    "endpoint" : "http://dynamodb.ap-northeast-2.amazonaws.com",
    "accessKeyId" : "AKIASMGVNLXC4BG7IXXW", "secretAccessKey" : "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"
};

AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();

let fetchOneByKey = () => {
    var params = {
        TableName: "Test",
        Key: {
                "id" : "email"
        }
    };

    docClient.get(params,(err, data) => {
        if(err){
            console.log("Test::fetchOneByKey::error - " + JSON.stringify(err, null, 2));
        }
        else{
            console.log("Test::fetchOneByKey::success - " + JSON.stringify(data, null, 2));
        }
    })
}

fetchOneByKey();