# Zipcode and Market Lookup API (USA, CAN, MEX)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) &nbsp;
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"> &nbsp;
<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"> &nbsp;
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white) &nbsp;
![AmazonDynamoDB](https://img.shields.io/badge/Amazon%20DynamoDB-4053D6?style=for-the-badge&logo=Amazon%20DynamoDB&logoColor=white)

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Installation Instructions](#installation-instructions)
- [How To Use](#instructions/how-to-use)
- [Contribution](#contribution-guidelines)
- [Tests](#application-tests)
- [About The Author](#about-the-author)

## Description

A simple to use api to lookup zip codes and markets based on City, State, and Country,

## Features

- Zip Code Lookup
  - Requires: City, State, Country (USA, MEX, CAN)
  - Returns the first zip code found for that combination
- Market Lookup
  - Requires: City, State, Country (USA)
  - Returns First ZIP and Market found for that combination
- City, State, Country Lookup
  - Requires: Zip Code (USA, MEX, CAN)
  - Returns City, State, Country, and Market for that zip code

## Installation Instructions

For general use no installation is required, simply use the api as described below. </br>

For development, clone the repo and run `npm install` to install dependencies.
Node.js v18.xx or higher is required.

## How To Use

For deatiled instructions on how to use the available endpoints refer to the [RouteGuide](./Documentation/RouteMap.md).

### Zip Code Lookup

_urrently does not support cities with punctuation or whitespace_ </br>
URL: Zipcode-lookup-api-env.eba-m7gj94bm.us-east-2.elasticbeanstalk.com
Endpoint: `/api/zip/:city/:state/:country` </br>
Method: `GET` </br>

_Supports all cities and states including puctuation, whitespace and common mispellings_ </br>
Endpoint: `/api/zip/lookup` </br>
Method: `POST` </br>
Body:

```json
{
	"city": "city",
	"state": "state",
	"country": "country"
}
```

### Market Lookup

_Currently supports US and CAN markets_ </br>
Endpoint: `/api/market/lookup` </br>
Method: `POST` </br>
Body:

```json
{
	"city": "city",
	"state": "state",
	"country": "country"
}
```

</br>

## Contribution Guidelines

Contributors are welcome, just keep a few things in mind:

1. All contributions are to be made in a separate branch off develop or in an independent fork. Do not attempt to contribute to develop or main directly without a pull request, it will be denied.

2. All contributions are subject to peer review, so please keep your code clean and readable, feel free to comment as much as you like, however most of those comments will likely be removed in the final version if your contributions are merged. Your code should speak for itself wherever possible and be clarified in the documentation if necessary.

3. If there is an open issue that is not assigned, that means it is available to be worked on, so take your pick.

4. don't forget to have fun. If you love what you do, its not work.

## Application Tests

No tests currently exist for this application. Feel free to make some though.

## About The Authors

I hope you enjoy the application, if you have any questions, comments, concerns, feedback, ect,
please feel free to open a new issue or reach out directly.

### Vincent Teune - Development

- Email: [vincent@vtportfolio.net](vincent@vtportfolio.net)
- GitHub: [cobalt88](https://github.com/circle-logistics)

### Jarod Barnhart - Data

- Email: [jarod.barnhart@gmail.com](jarod.barnhart@gmail.com)
- GitHub: [jibarnhart](https://github.com/jibarnhart)
