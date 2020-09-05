# Welcome to base65536-helper 👋
<p>
  <img alt="Version" src="https://badge.fury.io/js/base65536-helper.svg" />
  <a href="/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> Helper functions for the base65536 library to make it easier to encode and decode common data types. Check out base65536 at https://github.com/qntm/base65536

## Install

```sh
npm i base65636-helper
```

## Usage

```js
const {encode, decode} = require("base65536-helper")

const data = {name: "david", username: "gypsydangerous"}
const encodedData = encode(data)
const decodedData = JSON.parse(decode(encodedData)) // => {name: "david", username: "gypsydangerous"}
```

## Run tests

```sh
npm test
```

## Author

* Website: https://github.com/GypsyDangerous
* Github: [@gypsydangerous](https://github.com/gypsydangerous)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/GypsyDangerous/base65536-helper/issues). 

## Show your support

Give a ⭐️ if this project helped you!

## Documentation

 ### encode
 ```sh
 accepts "string", "number", "object", and "boolean"
 returns "base65536 string"
 ```

 ### decode
 ```sh
 accepts "base65536 string"
 returns "string"
 ```

 ### rawDecode
 #### raw base65536 decode function
 ```sh
 accepts "base65536 string"
 returns Uint8Array
 ```

  ### rawEncode
 #### raw base65536 encode function
 ```sh
 accepts Uint8Array
 returns "base65536 string"
 ```

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
