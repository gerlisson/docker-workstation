# Docker Workstation
![CI status](docs/images/docker-whale.svg)

Docker Workstation is a ready to use workstation with nodejs, mongoldb, apache and more..

## Features

* NodeJS with auto-refresher on development (nodemon)
* MongoDB
* Apache 2.4 + PHP 7.0.1
* XDebug installed on PHP

## Requirements
* Docker and Docker Compose

## Installation

On project root folder use:

`$ docker-compose up -d --build`

Access the the path: "./docker/apache-php7-server/conf/", copy the file "php.ini.dist" and paste in the same folder with the name "php.ini"

## Using Node-Server
To use/create your projects you should host your files into `./public/node-server`. You can access a hello-world example in the url: http://localhost:8080. You can change the port on file: docker-compose.yml, but pay attention becouse you should change environment -PORT to the same as the second port on "ports" in node-server service.

## Using PHP 7
To use/create your projects you should host your files into `./public/htdocs`.
To debug your project with xDebug wich is already installed, you should read [Configurating xDebug](https://github.com/marcoaure/docker-workstation/wiki/Configurating-xDebug).

## Using MongoDB
url to connect: http://localhost:27017
no user and password.

## To-do

- debug nodejs

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## License
[MIT](LICENSE.md)
