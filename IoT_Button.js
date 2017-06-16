'use strict';

/**
 * This is a Lambda function that sends an Email on the click of an AWS IoT
 * button by publishing to an SNS topic.
 *
 * 1. Enter the ARN (Amazon Resource Name) of the SNS topic you have created.
 * 2. Edit the content of the message to be delivered upon single clicks, double clicks, and 
 * long clicks by changing the text within the single quotation marks
 */

const AWS = require('aws-sdk');
const SNS = new AWS.SNS({ apiVersion: '2010-03-31' });

// !!CHANGE THIS!! Enter the ARN of your SNS Topic
const TOPIC_ARN = 'YOUR SNS TOPIC ARN GOES HERE';

exports.handler = (event, context, callback) => {
    
    const singleClick = 'There is food in the 10th floor kitchen';
    const doubleClick = 'Food on 10 - limited vegetarian options';
    const longClick = 'There is dessert in the 10th floor kitchen!';
   
var nomAlert = singleClick;   

if(event.clickType == "DOUBLE"){
    nomAlert = doubleClick;
}

if(event.clickType == "LONG"){
    nomAlert = longClick;
}
    
 const params = {
            Message: nomAlert,
            Subject: `NomNom Alert - Food on 10`,
            TopicArn: TOPIC_ARN,
        };
        // result will go to function callback
        SNS.publish(params, callback);
};
