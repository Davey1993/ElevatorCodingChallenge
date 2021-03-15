# ElevatorCodingChallenge
<h1>Concept</h1>
This challenge is code up a service that is responsible for handling a fictional building&#39;s Elevator
operations.
User of the service should be able to summon an elevator for a particular building they are in. And then interact with that elevator
through API requests. Once in the elevator, they should be able to select a floor for the elevator
to take them to. 

<ul>
 <li>The application should be a REST API </li>
 <li>Use what language you are comfortable with, NodeJS is used here.</li>
 <li>The application should be designed to run in the cloud or in a container, AWS Lambda functions are used with API Gateway here.</li>
 <li>The application data must be persisted in a database of some type. In this instance DynamoDB is used.</li>
</ul>

<h1>Architecture</h1>

![](codechallengeimg/architecture.PNG)

<h1> Structure </h1>

![](codechallengeimg/data.PNG)

<h1>Prerequisites</h1>
<ul>
<li>You will need Nodejs and npm installed if running this application on windows.</li>
<li>The other packages should be included with this project when cloned but just incase I will include more info. </li>
<li>The first thing I did was install serverless framework with <i>npm install serverless</i></li>
<li>I also had to install express with <i>npm install express</i></li>
<li>Also needed <i>npm install serverless-http</i></li>
<li>You will need to also configure your aws account with serverless, you can setup your keys on aws/*yourname*/mysecurity credentials.</li>
<li>The command then is <i>serverless config credentials --provider aws --key *YOURKEYHERE* --secret *YOURSECRETKEYHERE*</i></li>
<li>Additional Documentation for Serverless setup can be found <a href="https://www.serverless.com/blog/how-create-rest-api-serverless-components">here</a></li>
</ul>

<h1> DynamoDB </h1>
Here are how the tables generated in this project appear in DynamoDB.
Note the id's are relevent to each other between tables.

![](codechallengeimg/dynamoDBtables.PNG)

![](codechallengeimg/usersTable.PNG)

![](codechallengeimg/buildingsTable.PNG)

![](codechallengeimg/elevatorsTable.PNG)

<h1> REST Requests </h1>

<h2>Add a user</h2>
Postman

![](codechallengeimg/addUser.PNG)

Code

![](codechallengeimg/addUserCode.PNG)

<h2>Update a user - change name, modify buildings belongs to </h2>
Before

![](codechallengeimg/before.PNG)

After

![](codechallengeimg/after.PNG)

Code

![](codechallengeimg/put.PNG)