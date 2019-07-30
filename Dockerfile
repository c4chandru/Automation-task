FROM ubuntu

MAINTAINER chandrasekar sankar

#FROM node:8.2
### JAVA_HOME
ENV JAVA_HOME /usr/lib/jvm/java-8-oracle

RUN apt-get -y update
RUN apt-get install -y curl zip unzip
RUN curl --silent --location https://deb.nodesource.com/setup_8.x | sudo bash -
RUN apt-get install --yes nodejs build-essential

RUN mkdir -p /usr/src/Automation-task
WORKDIR /usr/src/Automation-task

COPY package.json /usr/src/Automation-task

# Install app dependencies
RUN npm install

COPY . /usr/src/Automation-task

#Run
CMD sh -c "node_modules/webdriverio/bin/wdio wdio.conf.js"