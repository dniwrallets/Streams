# js-stream

Web application for creating or viewing OBS stream

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Make sure you have a recent version of npm, check using

```bash
npm -v
```

### Installing

A step by step series of examples that tell you how to get a development env running.

Start the REST API

```bash
cd api
npm start
```

Start the RTMP media server

```bash
cd nms
npm start
```

Start the client server

```bash
cd client
npm start
```

## Deployment

Coming soon

## Built With

* [npm](https://www.npmjs.com/) - Dependency Management
* [React](https://reactjs.org/) - User interface framework
* [Redux](https://redux.js.org/) - State Container
* [Redux Form](https://redux-form.com/) - Form state management
* [Node-Media-Server](https://github.com/illuspas/Node-Media-Server) - RTMP media server
* [json-server](https://github.com/typicode/json-server) - REST API
* [PurpleBooth](https://github.com/PurpleBooth) README template

## Authors

* **John Yang** - [dniwrallets](https://github.com/dniwrallets)

See also the list of [contributors](https://github.com/dniwrallets/js-stream/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

* Special thanks to [Stephen Grider's Udemy course on React and Redux](https://www.udemy.com/course/react-redux/).
