const cluster = require('cluster')
const assert = require('assert')
const os = require('os')

const cpuN = os.cpus().length

module.exports = cpuCluster

// Turn a server into a CPU bound cluster
// fn -> null
function cpuCluster (opts, server) {
  if (!server) {
    server = opts
    opts = {}
  }

  const timeout = opts.timeout || 100

  assert.equal(typeof opts, 'object', 'opts is an object')
  assert.equal(typeof server, 'function', 'server is function')

  if (cluster.isWorker) return server()
  for (var i = 0; i < cpuN; i++) {
    cluster.fork()
  }

  cluster.on('exit', function () {
    setTimeout(function () {
      cluster.fork
    }, timeout)
  })

  return cluster
}
