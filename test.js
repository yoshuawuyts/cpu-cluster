const noop = require('noop2')
const test = require('tape')

const cpuCluster = require('./')

test('should assert input types', function (t) {
  t.plan(3)
  t.throws(cpuCluster.bind(null), /server/)
  t.throws(cpuCluster.bind(null, 'hi'), /server/)
  t.throws(cpuCluster.bind(null, 'hi', noop), /object/)
})

test('should create a cluster')

test('should take options')
