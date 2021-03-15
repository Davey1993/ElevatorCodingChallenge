# ElevatorCodingChallenge
<h1>Concept</h1>
This challenge is code up a service that is responsible for handling a fictional building&#39;s Elevator
operations.
User of the service should be able to summon an elevator for a particular building they are in. And then interact with that elevator
through API requests. Once in the elevator, they should be able to select a floor for the elevator
to take them to. 

 The application should be a REST API 
 Use what language you are comfortable with, NodeJS is used here.
 The application should be designed to run in the cloud or in a container, AWS Lambda functions are used with API Gateway here.
 The application data must be persisted in a database of some type. In this instance DynamoDB is used.

<h1>Architecture</h1>

![](codechallengeimg/architecture.PNG)

<h1> Structure </h1>

![](codechallengeimg/data.PNG)

<h1>Pre-requisites</h1>
You will need Nodejs and npm installed if running this application on windows.
The other packages should be included with this project when cloned but just incase I will include more info. 
The first thing I did was install serverless framework with <i>npm install serverless</i>
I also had to install express with <i>npm install express</i>
Also needed <i>npm install serverless-http</i>
You will need to also configure your aws account with serverless, you can setup your keys on aws/*yourname*/mysecurity credentials.
The command then is <i>serverless config credentials --provider aws --key *YOURKEYHERE* --secret *YOURSECRETKEYHERE*</i>
Additional Documentation for Serverless setup can be found <a href="https://www.serverless.com/blog/how-create-rest-api-serverless-components">here</a>

