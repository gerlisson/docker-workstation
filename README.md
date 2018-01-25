# Docker Workstation
![CI status](docs/images/docker-whale.svg)

Docker Workstation is a ready to use workstation with nodejs, mongoldb, apache and more..

## Features

* NodeJS with auto-refresher on development (nodemon)

## Requirements
* Docker and Docker Compose

## Installation

On project root folder use:

`$ docker-compose up -d --build`

## Using Node-Server
After runned the containner with `$ docker-compose up`, you can access a hello-world example in the url: http://localhost:8080. You can change the port on file: docker-compose.yml, but pay attention becouse you should change environment -PORT to the same as the second port on "ports" in node-server service.

## To-do

- install mongodb
- install apache

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## License
[MIT](LICENSE.md)
