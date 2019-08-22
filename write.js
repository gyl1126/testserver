var AWS = require("aws-sdk")

let awsConfig = {
    "region" : "ap-northeast-2",
    "endpoint" : "http://dynamodb.ap-northeast-2.amazonaws.com",
    "accessKeyId" : "AKIASMGVNLXC4BG7IXXW", "secretAccessKey" : "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"
};
AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();

let save = function () {

    var input = {
        "id": "write_movie",
          "year" : 2013,
        "title" : "Turn It Down, Or Else!",
        "info" : {
            "directors" : [
                "Alice Smith",
                "Bob Jones"
            ],
            "release_date" : "2013-01-18T00:00:00Z",
            "rating" : 6.2,
            "genres" : [
                "Comedy",
                "Drama"
            ],
            "image_url" : "http://ia.media-imdb.com/images/N/O9ERWAU7FS797AJ7LU8HN09AMUP908RLlo5JF90EWR7LJKQ7@@._V1_SX400_.jpg",
            "plot" : "A rock band plays their music at high volumes, annoying the neighbors.",
            "rank" : 11,
            "running_time_secs" : 5215,
            "actors" : [
                "David Matthewman",
                "Ann Thomas",
                "Jonathan G. Neff"
           ]
        }
    }
    var params = {
        TableName: "Test",
        Item:  input
    };
    docClient.put(params, function (err, data) {

        if (err) {
            console.log("Test::save::error - " + JSON.stringify(err, null, 2));                      
        } else {
            console.log("Test::save::success" );                      
        }
    });
}

save();