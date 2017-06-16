# aws-lambda-iot-button

This is a Lambda function that sends an Email on the click of an AWS IoT
button by publishing to an SNS topic.

Copy and paste the code from Iot_Button.js into an AWS Lambda Function and make the 2 edits below

 * 1. Enter the ARN (Amazon Resource Name) of the SNS topic you have created.
 * 2. Edit the content of the message to be delivered upon single clicks, double clicks, and 
      long clicks by changing the text within the single quotation marks
