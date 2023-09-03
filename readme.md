# NGDPS (**N**ode **G**eometry **D**ash **P**rivate **S**erver)

Geometry Dash server emulator, inspired by [Cvolton's Geometry Dash server emulator](https://github.com/Cvolton/GMDprivateServer) but written for Node.js

## Setup and run
> Run ```npm i``` to install all the dependencies<br> run ```node run server``` or ```ts-node src/index.ts``` to run the server

## Requirements
- Node.js 16 or above (Not tested in < 15)
- MySQL/MariaDB database
- Edit the URL's in GeometryDash.exe ([you can use GDSleditor](https://github.com/elnexreal/GD-SLEditor))
- Set the .env variables

## Credits

[Cvolton](https://github.com/Cvolton) - Original idea and algorithms<br>
[Bcrypt](https://www.npmjs.com/package/bcrypt) - Password encryption<br>
[expressjs](https://github.com/expressjs) - Base for the system