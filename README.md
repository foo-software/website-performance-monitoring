<img src="https://s3.amazonaws.com/foo.software/images/marketing/website-performance-monitoring-birds-eye-view.jpg" alt="Birds Eye View Performance Monitoring" />

# Website Performance Monitoring

An informative website for providing a guide to web page performance and performance measuring. We take a look at what it means and some important website performance metrics.

On [www.website-performance-monitoring.org](http://www.website-performance-monitoring.org) we ask answer some questions and ponder on the subject of website performance.

- What is Website Performance?
- What are Website Performance Metrics?
- How to Performance Test a Website
- How to Monitor Performance Website

## Continuous Integration / Continuous Delivery

This repo also serves as an example of how one could communicate with [Foo's `lighthouse-check`]https://github.com/foo-software/lighthouse-check-cli), as part of a pipeline. In our [circleci configuration](./.circleci/config.yml), we utilize the [`lighthouse-check-cli` Docker image](https://cloud.docker.com/u/foosoftware/repository/docker/foosoftware/lighthouse-check-cli) to performance an audit on [www.website-performance-monitoring.org](http://www.website-performance-monitoring.org). We do this as a post-deploy step, so that we essentially run a performance regression test after every deploy.

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

## Credits

> <img src="https://s3.amazonaws.com/foo.software/images/logo-200x200.png" width="100" height="100" align="left" /> This package was brought to you by [Foo - a website performance monitoring tool](https://www.foo.software). Create a **free account** with standard performance testing. Automatic website performance testing, uptime checks, charts showing performance metrics by day, month, and year. Foo also provides real time notifications when performance and uptime notifications when changes are detected. Users can integrate email, Slack and PagerDuty notifications.
