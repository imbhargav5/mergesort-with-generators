import test from 'ava';
import mergesort from '../src';

test('mergesort', t => {
      t.deepEqual(mergesort([5,7,3,16,19,17]),[3,5,7,16,17,19]);
});
