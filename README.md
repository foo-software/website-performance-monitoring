# Example Lighthouse Audit in a Continuous Delivery Pipeline

A simple example of a Foo API triggered Lighthouse audit in a continuous delivery pipeline.

## Install

```bash
$ npm install
```

## Development

```bash
$ npm run watch
```

## Production

```bash
$ npm run production
```

## Tests

```bash
$ npm run test
```

## Heroku

Make sure to allow installation of `devDependencies` with:

```bash
$ heroku config:set NPM_CONFIG_PRODUCTION=false
```

Related threads [here](https://stackoverflow.com/questions/36781542/package-json-start-script-babel-node-not-found-on-heroku-deploy) and [here](https://github.com/developit/express-es6-rest-api/issues/36#issuecomment-345400246).

> This is just an oddity of Heroku

🔥"This is fine" 🔥
