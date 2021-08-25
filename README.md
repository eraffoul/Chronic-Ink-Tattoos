# Javascript tests for internship/junior developer applicants
This is a repository **for employees** to review the current level of **knowledge, thinking and code quality** of interview subjects. Also for **js-developer wannabes** to **practice and learn**. 

*Try to give a generic solution, rather than just satisfy the unit tests, since it doesn't do any good for anyone.:)*

## The tasks consist of implementation of several algorithms:
1. [Palindromes](https://github.com/tokdaniel/js-test/blob/master/tasks/1.%20Palindrome%20check/README.md) - Check if the given input is a palindrome.
2. [Fibonacci](https://github.com/tokdaniel/js-test/blob/master/tasks/2.%20Fibonacci%20-%20recursive/README.md) - Implement a function recursively, which returns the fibonacci numbers until N.
3. [Balanced Parentheses](https://github.com/tokdaniel/js-test/blob/master/tasks/3.%20Balanced%20parentheses/README.md) - Determine if the given input string's parentheses are balanced.
4. [FizzBuzz](https://github.com/tokdaniel/js-test/blob/master/tasks/4.%20FizzBuzz/README.md) - Give your implementation of FizzBuzz.
5. [Caesar's Cipher](https://github.com/tokdaniel/js-test/blob/master/tasks/5.%20Caesar%20cipher/README.md) - Give your implementation of Caesar's cipher
6. [Reduce](https://github.com/tokdaniel/js-test/tree/master/tasks/6.%20Implement%20reduce) - Implement the javascript utility reduce.
7. [Circle Contains](https://github.com/tokdaniel/js-test/tree/master/tasks/7.%20Is%20Point%20inside%20Circle) - Determine if a given point is inside the area of a circle.

### In every task folder there is a more detailed explanation of the expected task.
* These are in order of difficulty (according to my subjective judgement).
* I plan to extend the list with new tasks in the future

## What you'll need to solve them
* Your favourite IDE, editor or other stuff that lets you conveniently edit code.
* Cloning, or saving this repository to your local filesystem.
* Some of the newer versions of node.js (https://nodejs.org).
* Opening a command line and run ```npm install``` in the root folder.
* Diving in & some usage of google

## Check your solutions
If you think your solution is fine run the **check.bat** file it will open a **report in your default browser** and tell you if something is wrong. If you are using linux or mac, I hope you'll know what to do (execute the npm test command, and open mochawesome.html).



## ANSWERS TO THE QUESTIONS
#1.# We need a sales report from our Shopify site that should give a breakdown of product sell-through rates on a daily basis, while a product is in inventory. This report is not available directly through the Shopify admin/report tool. What would be the best method of collecting the required data so that it could be aggregated weekly into the required report?

#A:# If the option of getting the required information is not available via a custom report in the report tools, i would explore the possibility of getting the data from the database itself. For this, i would define proper API REST requests in order to get the updated info every time needed.

#2.# You are looking through a Shopify liquid template and come across the following piece of JavaScript code. What does it do?

<script>
if(ShopifyAnalytics.meta.page.customerId === undefined){
window.location.href = "https://store.chronicinkattoo.com";
}
</script>

#A:# If the user is no logged in the store, it sets the current page to be the home root of the store. My best guess is that this is used to perform a url redirect after.

#3.# When working with Shopify data - externally - are you better to use a SQL or NoSQL style database and why?

#A:# Shopify data, as almost every e-commerce solution, is a well structured set of information, with persistent relations across the entire application, that makes it more useful to handle with a SQL database. IFF the amount of information being handled excedes the order of petabytes, i would not consider the use of a NoSQL environment.

