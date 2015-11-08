# cpu-cluster [![stability][0]][1]
[![npm version][2]][3] [![build status][4]][5] [![test coverage][6]][7]
[![downloads][8]][9] [![js-standard-style][10]][11]

Turn a server into a CPU bound cluster.

__features:__
- create one child process per CPU core
- share network ports
- auto respawn when a child process dies
- expose `cluster` object for low level event handlers

## Installation
```sh
$ npm install cpu-cluster
```

## Usage
```js
const cpu-cluster = require('cpu-cluster')
const http = require('http')

const cluster = cpu-cluster(function () {
  http.createServer(function (req, res) {
    res.setHeader('Content-Type', 'text/plain')
    res.end('hello world')
  }).listen(8080)
})

cluster.on('connection', function (worker, addr) {
  console.log('Worker listening on ${addr.address}:${addr.port}')
})
```

## API
### cpu-cluster(opts?, server)
Create a cluster where each `server` is started as a separate process. Takes
the following options:
- __n:__ amount of child process to start. Defaults to the number of CPU cores
  available on the machine.
- __timeout:__ timeout after a child process exits and a new process is
  started. Defaults to `100`ms.

## See Also
- [api/cluster](https://nodejs.org/api/cluster.html)

## License
[MIT](https://tldrlegal.com/license/mit-license)

[0]: https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square
[1]: https://nodejs.org/api/documentation.html#documentation_stability_index
[2]: https://img.shields.io/npm/v/cpu-cluster.svg?style=flat-square
[3]: https://npmjs.org/package/cpu-cluster
[4]: https://img.shields.io/travis/yoshuawuyts/cpu-cluster/master.svg?style=flat-square
[5]: https://travis-ci.org/yoshuawuyts/cpu-cluster
[6]: https://img.shields.io/codecov/c/github/yoshuawuyts/cpu-cluster/master.svg?style=flat-square
[7]: https://codecov.io/github/yoshuawuyts/cpu-cluster
[8]: http://img.shields.io/npm/dm/cpu-cluster.svg?style=flat-square
[9]: https://npmjs.org/package/cpu-cluster
[10]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[11]: https://github.com/feross/standard
