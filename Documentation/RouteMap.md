# API Route Map

This document details all the complete and tested routes currently available, how to access them, what data (if any) they expect to receive in the request params or body, and what data you should expect to be returned.

## Contents

- [Zipcode Lookup (URL)](#zipcode-lookup-url)
- [Zipcode Lookup (JSON)](#zipcode-lookup-json)
- [Market Lookup (URL)](#market-lookup-url)
- [Market Lookup (JSON)](#market-lookup-json)
- [Models Information](#models-information)
- [Server Information](#server-information)
- [About The Author](#about-the-author)

---

## Zipcode Lookup (URL)

**Note:** This route is currently under development and only works for simple combinations that do not require punctuation or whitespace.

- **GET Zip 2-Character Country Code:** </br>
  _Requires City, State, And country code in the url string. Country can be 2 character or 3 character._
  Request Requirements: URL Params - "/:City/:State/:Country" </br>
  Method: GET <br>
  URL: "Zipcode-lookup-api-env.eba-m7gj94bm.us-east-2.elasticbeanstalk.com" </br>
  Example: "Zipcode-lookup-api-env.eba-m7gj94bm.us-east-2.elasticbeanstalk.com/api/zip/Denver/CO/US" </br>
  Expected Response: </br>

  ```json
  {
  	"Zip": "80215"
  }
  ```

- **GET Zip 3-Character Country Code:** </br>
  Request Requirements: URL Params - "/:City/:State/:Country" </br>
  Method: GET <br>
  URL: "Zipcode-lookup-api-env.eba-m7gj94bm.us-east-2.elasticbeanstalk.com" </br>
  Example: "Zipcode-lookup-api-env.eba-m7gj94bm.us-east-2.elasticbeanstalk.com/api/zip/Denver/CO/USA" </br>
  Expected Response: </br>

  ```json
  {
  	"Zip": "80215"
  }
  ```

## Zipcode Lookup (JSON)

- **GET Zip 2-Character Country Code:** </br>
  _Country code can be 2-character or 3-character, names should be camel cased_
  Request Requirements: JSON Body </br>
  Method: POST <br>
  URL: "Zipcode-lookup-api-env.eba-m7gj94bm.us-east-2.elasticbeanstalk.com/api/zip/lookup" </br>
  Request Body Template:

  ```json
  {
  	"city": "City",
  	"state": "State",
  	"country": "Country"
  }
  ```

  Example Request Body: </br>

  ```json
  {
  	"city": "St. Louis",
  	"state": "MO",
  	"country": "USA"
  }
  ```

  Expected Response: </br>

  ```json
  {
  	"Zip": "63915"
  }
  ```

## Market Lookup (URL)

- **GET Market For Zip:** </br>
  Request Requirements: "" </br>
  Expected Response: "" </br>idk,
  Method: POST <br>
  URL: "" </br>
  Example: "" </br>

---

## Market Lookup (JSON)

- **GET Market and Zip:** </br>
  Request Requirements: JSON Body </br>
  Method: POST <br>
  URL: "Zipcode-lookup-api-env.eba-m7gj94bm.us-east-2.elasticbeanstalk.com/api/market/lookup" </br>
  Example Request Body: </br>

  ```json
  {
  	"city": "St. Louis",
  	"state": "MO",
  	"country": "USA"
  }
  ```

  Expected Response: </br>

  ```json
  {
  	"Zip": "63195",
  	"Market": "MO_STL"
  }
  ```

- **POST Route Map Template:** </br>
  Request Requirements: "" </br>
  Expected Response: "" </br>
  Method: POST <br>
  URL: "" </br>
  Example: "" </br>

- **PUT Route Map Template:** </br>
  Request Requirements: </br>
  Expected Response: "" </br>
  Method: PUT <br>
  URL: "" </br>
  Example: "" </br>

- **DELETE Route Map Template:** </br>
  Request Requirements: "" </br>
  Expected Response: "" </br>
  Method: DELETE <br>
  URL: "" </br>
  Example: "" </br>

---

## Models Information

---

## Server Information

---

## About The Author

**Author:** Vincent Teune </br>
**Last Updated:** October 2023
