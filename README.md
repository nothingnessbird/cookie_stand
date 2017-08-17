# cookie_stand

# Project Title
Cookie stand project for week 2 codefellows 201

##Project description
This is a mockup site for a cookie store business, with a public facing front page and and private sales page for the owner. The sales.html page is populated by JavaScript, which calculates random numbers for cookie sales based on given parameters with a contructor object to make stores. The salmon.png image in the header was provided, as well as fish.jpg, chinook.jpg, cutter.jpeg, family.jpg,frosted-cookie.jpg, and shirt.jpg, and the gifs for the sales.html label were sourced from preloaders.net. The fonts are from google fonts. Several fish images were sourced from google images. All other styles were generated with CSS.

##Code description
Stores are created using an object constructor function which takes arguments of the location, store hours, minimum customers per hour, maximum number of customers per hour, and average number of cookes bought per customer, as well as empty arrays for the hours and cookies sold per hour, and uses methods to generate random numbers of cookies sold per hour (as well as total cookies sold per day at each store) and push them to the cookie hour array, and calculates the hours open into each hour with am/pm, and pushes those to the hour array. There is a function for generating totals per hour and a grand total for the day. 

The Javascript creates a table in the DOM to hold this information, and a form in the DOM to take arguments for a new store object. When a new store is added, the previous totals row is deleted and a new one generated with the updated totals. 

## Authors
Kinley Ramson

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc
