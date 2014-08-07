# [![FreewheelingNC Logo](http://freewheelingnc.raleighacorn.com/img/logo.png)](http://freewheelingnc.raleighacorn.com/) Freewheeling NC

## Prerequisites
* Node.js - Download and Install [Node.js](http://www.nodejs.org/download/). You can also follow [this gist](https://gist.github.com/isaacs/579814) for a quick and easy way to install Node.js and npm
* MongoDB - Download and Install [MongoDB](http://docs.mongodb.org/manual/installation/) - Make sure `mongod` is running on the default port (27017).

### Tools Prerequisites
* NPM - Node.js package manage; should be installed when you install node.js.
* Bower - Web package manager. Installing [Bower](http://bower.io/) is simple when you have `npm`:

```
$ npm install -g bower
```

### Optional
* Grunt - Download and Install [Grunt](http://gruntjs.com).
```
$ npm install -g grunt-cli
```

## Additional Packages
* Express - Defined as npm module in the [package.json](package.json) file.
* Mongoose - Defined as npm module in the [package.json](package.json) file.
* Passport - Defined as npm module in the [package.json](package.json) file.
* AngularJS - Defined as bower module in the [bower.json](bower.json) file.
* Twitter Bootstrap - Defined as bower module in the [bower.json](bower.json) file.
* UI Bootstrap - Defined as bower module in the [bower.json](bower.json) file.

## To Build and Start
    $ cd <thisprojectfolder> && npm install
    $ cp config/env/production.js config/env/local.js

    Update local.js to point to your own mongodb or the group mongolab db.

    $ NODE_ENV=local grunt

  Then, open a browser and go to:

    http://localhost:3000

## API endpoints and uses available

### Get Bike Routes

  #### Request

  $ GET http://localhost:3000/bikeroutes

  #### Response
  <pre>
  [
    {
        "_id": "53d42881e4b0c8cc2d3dfe5b",
        "coordinates": [
            [
                -78.560142517089844,
                35.777435736805643
            ],
            [
                -78.550872802734375,
                35.776321586067269
            ],
            
        ],
        "difficulty": 10,
        "purpose": "Work Commute",
        "safety": 1
    },
    {
        "_id": "53d42881e4b0c8cc2d3dfe5b",
        "coordinates": [
            [
                -78.632755279541016,
                35.772491573832305
            ],
            [
                -78.632326126098633,
                35.780151413822807
            ]
        ],
        "difficulty": 2,
        "purpose": "Lunch",
        "safety": 8
    }
  ]
  </pre>

  #### Request
  $ POST http://localhost:3000/bikeroutes

  ##### Body
  <pre>
  {
        "coordinates": [
            [
                -78.560142517089844,
                35.777435736805643
            ],
            [
                -78.550872802734375,
                35.776321586067269
            ]            
        ],
        "difficulty": 10,
        "purpose": "Work Commute",
        "safety": 1
    }
  </pre>

  #### Response
  <pre>
    {
    "__v": 0,
    "difficulty": 10,
    "purpose": "Work Commute",
    "safety": 1,
    "coordinates": [
        [
            -78.56014251708984,
            35.77743573680564
        ],
        [
            -78.55087280273438,
            35.77632158606727
        ]
    ],
    "_id": "53e2c2b2205daa3a38e85b20"
    }
  </pre>

  #### Request
  $ DELETE http://localhost:3000/bikeroutes

  Currently broken. deletes everything.