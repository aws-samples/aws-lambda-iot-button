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

// !!CHANGE THIS!! Your text to display goes in the single quotation marks below    
    const singleClick = 'TYPE SINGLE CLICK MESSAGE HERE';
    const doubleClick = 'TYPE DOUBLE CLICK MESSAGE HERE';
    const longClick = 'TYPE LONG CLICK MESSAGE HERE';
   
var nomAlert = singleClick;   

if(event.clickType == "DOUBLE"){
    nomAlert = doubleClick;
}

if(event.clickType == "LONG"){
    nomAlert = longClick;
}
    
 const params = {
            Message: nomAlert,
            // !!CHANGE THIS!! Enter the subject of your email in the single quotation marks below
            Subject: `EMAIL SUBJECT GOES HERE`,
            TopicArn: TOPIC_ARN,
        };
        // result will go to function callback
        SNS.publish(params, callback);
};
