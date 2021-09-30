##Let's get started.

First of all, we have to create a brand new project using yarn but if you prefer you can use Npm, that is completely up to you.

```
mkdir ts-node-app

cd ts-node-app

yarn init -y
```

### Adding the necessary dependencies

In first place we will add express.

```
yarn add express
```

Now we will add the support for typescript. in order to do that let add some other dependencies.

```
yarn add typescript ts-node @types/node @types/express --dev
```

typescript is installed as a dev dependency because all your code will be compilated into vanilla js, the that dependencies will be unnecessary once you build your application

### Let's configure your app to use typescript.

To start using typescript in your project is not enough to install it as a dependency; you have to create a configuration file called tsconfig.json; in this file, there are a lot of configurations the most of that commented, to understand this file, please check this [Link](https://www.staging-typescript.org/tsconfig)

to create the tsconfig.json you can use npx

```
npx tsc --init
```

### Now we are ready to write code using Typescript.

let's create a simple server using express and typescript.

```
import express from "express";

const app: express.Application = express();

app.get("/", (request: express.Request, response: express.Response) => {
  response.send("Hello World");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});

```

### Building the app.

Now we are in position to build the app, so we will create a build and start scripts in package.json

```
"scripts": {
    "build": "tsc --project ./",
    "start": "node ./build/app.js"
  },
```
