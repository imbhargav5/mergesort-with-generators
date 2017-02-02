const Benchmark = require('benchmark');
const mergesort = require('../src');
const mergesort_without_generator  = require('../src/without_generator');
const arr = Array.from({length:11000}).map((x,i)=>parseInt(Math.random()*100));
const suite = new Benchmark.Suite;

// add tests
suite.add('mergesort with generators', function() {
  mergesort(arr);
})
.add('mergesort without generators', function() {
  mergesort_without_generator(arr);
})
.add('basic sort', function() {
  arr.sort();
})
// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async
.run({ 'async': true });
