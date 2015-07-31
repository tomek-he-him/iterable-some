import some from './module';

const test = require('tape-catch');
const isTruthy = require('this-is-truthy');

test('Works with arrays', ({end, equal}) => {
  equal(
    [0, 0, 1]::some(isTruthy),
    true,
    'returning `true` when the predicate yields `true` once'
  );

  equal(
    [false, false, false]::some(isTruthy),
    false,
    'returning `false` when the predicate never yields `true`'
  );

  equal(
    [0, 0, 1]::some(function() {
      return ((this > 0) ? '' : 'ok');
    }),
    true,
    'returning `true` when the predicate yields a truthy value once'
  );

  equal(
    [0, 0, -1]::some(function() {
      return ((this > 0) ? '' : 'ok');
    }),
    true,
    'returning `false` when the predicate only yields falsy values'
  );

  equal(
    []::some(() => true),
    false,
    'returning `false` for an empty array'
  );

  [0, 0, 1, 2]::some(function() {
    if (this === 2) {
      fail('not executing anything more having found a match');
    }
    return (this > 0);
  });

  [0, 0, 0, -1]::some(function() {
    if (this === -1) {
      pass('executing the predicate on every element when no match is found');
    }
    return (this > 0);
  });

  end();
});
