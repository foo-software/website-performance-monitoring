# Website Performance Monitoring

An informative website for providing a guide to web page performance and performance measuring. We take a look at what it means and some important website performance metrics.

On [www.website-performance-monitoring.info](http://www.website-performance-monitoring.info) we ask answer some questions and ponder on the subject of website performance.

- What is Website Performance?
- What are Website Performance Metrics?
- How to Performance Test a Website
- How to Monitor Performance Website

## Continuous Integration / Continuous Delivery

This repo also serves as an example of how one could communicate with [Foo's public REST API](https://www.foo.software/docs/api/Methods.html), as part of a pipeline. With our [circleci configuration](./.circleci/config.yml), we curl the endpoint to trigger a performance audit on [www.website-performance-monitoring.info](http://www.website-performance-monitoring.info). We do this as a post-deploy step, so that we essentially run a performance regression test after every deploy.

## How to Run and Deploy the App

Below is how to run the app locally and instructions for Foo engineers for deploying.

#### Install

```bash
$ npm install
```

#### Development

```bash
$ npm run watch
```

#### Production

```bash
$ npm run production
```

#### Tests

```bash
$ npm run test
```

#### Heroku

Make sure to allow installation of `devDependencies` with:

```bash
$ heroku config:set NPM_CONFIG_PRODUCTION=false
```

#### circleci

Follow [these instructions](https://circleci.com/docs/2.0/env-vars/#setting-an-environment-variable-in-a-project) for adding environment variables.
