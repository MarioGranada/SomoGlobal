/*

 *** Somo - Javascript **********************************************
 *
 * Background:
 * 
 * - This test is just to understand your ability to code
 *   in JavaScript and your understanding of a typical Jira ticket.
 * 
 * - As with any development environment this is an open book task,
 *   so please feel free to use Google or StackOverflow.
 * 
 * - Bonus marks for suitable comments in your code.
 *
 * - If you do not understand a part of the test please add a comment to
 *   your code explaining the issues if it was a Jira comment.
 *
 ********************************************************************

Task: 

1/ Write a function that when run, calls out to the following 
   wikipedia page “https://en.wikipedia.org/wiki/Special:Random” 

2/ Using the html text returned display the value in the "<title>" tag.

3/ Stretch task: Find and display all the values in the "Categories" 
   section which are displayed at the bottom of the page.

The code should compile and run in Coderpad window, and example project 
is below for reference please remove and write your own code below.

*/

// Importing libraries first
const fetch = require('node-fetch');
const jsdom = require('jsdom');
const _ = require('underscore');
const { JSDOM } = jsdom;

// Creating my function so any site can be called.
// Additionally, expansion the function to not only display the title and categories
// but also any other site's data in the future.

function displayRandomSiteData(siteUrl) {
  fetch(siteUrl)
    .then(response => response.text())
    .then(responseText => {
      const dom = new JSDOM(responseText);
      const siteDocument = dom.window.document;

      console.log(
        'Site Title:',
        siteDocument.querySelector('title').textContent
      );

      let catLinks = siteDocument.querySelectorAll('#mw-normal-catlinks ul li');

      console.log('Main Categories:');
      _.each(catLinks, item => {
        console.log(item.textContent);
      });
    });
}

//Calling our function.
displayRandomSiteData('https://en.wikipedia.org/wiki/Special:Random');
