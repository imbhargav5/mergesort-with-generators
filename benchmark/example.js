const mergesort = require('../src');
const mergesort_without_generator  = require('../src/without_generator');
var timer = function(name) {
    var start = new Date();
    return {
        stop: function() {
            var end  = new Date();
            var time = end.getTime() - start.getTime();
            console.log('Timer:', name, 'finished in', time, 'ms');
        }
    };
};
const arr = Array.from({length:11000}).map((x,i)=>parseInt(Math.random()*100));
const t1 = timer('mergesort with generators');
mergesort(arr);
t1.stop();

//Without generators
const t2 = timer('mergesort without generators');
mergesort_without_generator(arr);
t2.stop();

const t3 = timer('basic sort');
arr.sort();
t3.stop();
