# Jest Workhop

## Requirements

* Node 8.9.x
* npm >= 5.x o Yarn >= 1.3.x

This readme assumes you are using `npm` but you can use `yarn` wiht the same commands.

## Set up!

Install the dependencies with:

```
npm install
```

## Development

To launch the front with `webpack-dev-server`

```
npm run front
```

To launch the backend with `nodemon`:

```
npm run back
```

Both front and back will automatically pick code changes and reload. The front needs the back to be up
and running to work.

## Testing

To launch the test suite:

```
npm test
```

To launch the suite in watch mode:

```
npm test -- --watch
```

## Linting

To run the linter (ESLint based):

```
npm run lint
```

You can try to auto fix some errors with

```
npm run lint -- --fix
```

## Production?

Build both the front and the back and run the server:

```
npm start
```
