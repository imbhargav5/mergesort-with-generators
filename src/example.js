import mergesort from './';

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
const arr = Array.from({length:7000}).map((x,i)=>parseInt(Math.random()*100));
const t1 = timer('mergesort');
mergesort(arr);
t1.stop();



const t2 = timer('basic sort');
arr.sort();
t2.stop();
