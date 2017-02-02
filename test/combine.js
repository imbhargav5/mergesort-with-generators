import test from 'ava';
import combine from '../src/combine';

test('combine', t => {
    function* g1(){
      yield 3;
      yield 5;
      yield 17;
    }

    function* g3(){
      yield 7;
      yield 16;
      yield 19;
    }

    t.deepEqual(Array.from(combine(g1(),g3())),[3,5,7,16,17,19]);

});
