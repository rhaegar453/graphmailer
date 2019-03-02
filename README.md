## Technologies Used

I have used React and Semantic-UI for the front-end. Since this application involves fetching data from an api which included CPU, RAM and Total Utilization data, I created a function that could generate random data every second. The implementation of the same can be seen on the actions.js file. 
For sending emails, I created an Email Client using Express and SendGrid, which I hosted on heroku.
I hooked up the Email Client API with the actions and whenever the TotalUtilization exceeeded 50% for straight 10 seconds, I used an action to trigger the email client to send an email to the end user.

For implementing the graphs I have used a React Charting Library - ReCharts.


## UI

The application consists of 2 Graphs as mentioned in the problem statement.

Also, I have included two buttons to see the state of the data that is being plotted on the graph. And one other button to see when the Totl Utilization trigger went off. 


## Procedure to install

Clone the signzybackend(Backend) repository first and replace the to, from and api-keys with your credentials and host the express application on a hosting platform like heroku.
https://github.com/rhaegar453/signzybackend.git



Clone the signzyproject (Frontend) repository and replace the URL of the email client under the trigger function. 
https://github.com/rhaegar453/signzyproject.git


You are good to go, now just npm start and all should work. 

Also, the data generator I have used generates random data and it is highly unlikely that it is going to stay above 50% total utilization uptil 10 seconds. Hence, just for the sake of testing, I have set value under 'getDataAsync()' method as 1. You can choose to change the value.


Note that, since I was communicating with the email client which was hosted on a different domain. For security purposes, browsers dont allow such requests, Hence I to test out the application , You will also have to have CORS enabled on your respective browsers.


