> ## ⚠️THIS IS THE TESTING BRANCH, ITS NOT USEFUL FOR ANYTHING⚠️

# NGDPS (**N**ode **G**eometry **D**ash **P**rivate **S**erver)

Geometry Dash server emulator, inspired by [Cvolton's Geometry Dash server emulator](https://github.com/Cvolton/GMDprivateServer) but written in Node.js

## Setup and run
> Run ```npm i``` to install all the packages needed to run the server then run ```node .``` or ```node index.js``` to run the server

## Requirements
- Node.js 16 or above (Not tested in < 15)
- MySQL/MariaDB database
- Edit the URL's in GeometryDash.exe (some of them are base64 encoded)
- Set the .env variables

## Env file template

`Your server URL needs to be exactly 13 characters long (if you are replacing the base URL only)`

```
host: 'boomlengs.com'
port: '3306'
user: 'username'
password: 'password'
database: 'geometrydash'
```

### Credits

[Cvolton](https://github.com/Cvolton) - Original idea and algorithms

[Bcrypt](https://www.npmjs.com/package/bcrypt) - Password encryption

[expressjs](https://github.com/expressjs) - Base for the system
