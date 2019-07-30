Automation-task
===============

# Instructions

clone the repo to your local machine

```shell
cd Automation-task
```

You will need to have [Node.js](http://nodejs.org/) and [NPM](https://www.npmjs.org/) installed on your machine. 
Check out their project websites for more instructions. If you want to have WebdriverIO integrated into your test suite, 
then install it locally with:

you can run directly the below commands to setup the project

```shell
npm install

```
To run the automation script copy and paste the below command

```shell
npm test

```
Incase if there is any issue in setting up the project please run the below commands
 
```shell
npm install webdriverio
```
or
```shell
npm install -g webdriverio
```

## Set up your Selenium environment

There are two ways of setting up your Selenium environment: as a standalone package or by installing the
server and browser driver separately.

### Use of existing standalone package

The simplest way to get started is to use one of the NPM selenium standalone
packages like: [vvo/selenium-standalone](https://github.com/vvo/selenium-standalone). After installing
it (globally) you can run your server by executing:

```sh
npm install selenium-standalone --save-dev

./node_modules/.bin/selenium-standalone install && ./node_modules/.bin/selenium-standalone start
```

If you are using the wdio testrunner you might be interested in the [Selenium Standalone Service]
(/guide/services/selenium-standalone.html) that starts the server for you everytime before the test starts.

You can also run the selenium server separately from your test setup. To do so you need to get the newest version of 
the selenium standalone server [here](http://docs.seleniumhq.org/download/). Just download the jar file somewhere on 
your system. After that start your terminal and execute the file via

```sh
$ java -jar /your/download/directory/selenium-server-standalone-3.5.3.jar
```
### After setup 

In terminal run the below command

```shell
npm test

```