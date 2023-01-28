What is The project?
=======================
The project focus send me notification via discord when I have bills to pay today.

Technologies:
===============
- Git
- Node.js
- Javascript
- Lambda(Vercel)
- Google sheet(Database)
- Pipedream(cronjob) used to schedule task to call lambda
- Discord webhook used to send message with bills to pay today

Referencies:
================
- https://jvvoliveira.medium.com/manipulando-google-sheets-com-node-js-4a551c68b270
- https://vercel.com/guides/how-to-setup-cron-jobs-on-vercel

Instructions to running locally:
================================

- Clone repository
- Execute command **npm i** install the modules The project needs.
- Create **.env** file based **.env.example** file
- Execute command **npm run dev** run the application. The application can be accessed in http://localhost:3000
