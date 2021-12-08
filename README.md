# Node development docker project

Example project to develop application with [Node](https://nodejs.org/) using [Docker](https://www.docker.com/).

The idea is that you can use docker to develop your node application, without aving to install anything on your system.

If you use the wrappers `./npm` and `./npx` you can run anything in the container like you use to do if you have node installed on your system.

## TL;DR

Edit the configuration file `.env` to fit your needs.

A configured file will look something like:

```env
PROJECT_NAME=awesomeidea
PROJECT_VENDOR=mystartup

COMPOSE_PROJECT_NAME=awesomeidea_mystartup
COMPOSE_FILE=.bmeme/docker-compose.yml
```

Create and run the docker container

```bash
$ docker-compose up -d
```

You can check that everything is working right

```
$ docker-compose ps
           Name                     Command         State   Ports
-----------------------------------------------------------------
awesomeidea_mystartup_app_1   /bin/sleep infinity   Up
```

Run the `npm` or `npx` using the wrappers

```bash
$ ./npm --version
6.14.10
$ ./npx --version
6.14.10
```

If you need to run other commands inside the cointainer, you can run it with `.bmeme/bin/app`

```
$ .bmeme/bin/app node --version
v14.15.4
```

## Access the container

You can use the `.bmeme/bin/app` wrapper to exec commands in the container.
If you run the script without anything, you will access a shell insided the container itself.

```
$ .bmeme/bin/app node
Welcome to Node.js v14.15.4.
Type ".help" for more information.
>
```

## References

- [Node.js Docker official images](https://hub.docker.com/_/node)
