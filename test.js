import some from './module';

const test = require('tape-catch');
const isTruthy = require('this-is-truthy');

test('Works with arrays', ({end, equal}) => {
  equal(
    [0, 0, 1]::some(isTruthy),
    true,
    'returning `true` when the condition returns `true` once'
  );

  equal(
    [false, false, false]::some(isTruthy),
    false,
    'returning `false` when the condition never returns `true`'
  );

  equal(
    [0, 0, 1]::some(function() {
      return ((this > 0) ? '' : 'ok');
    }),
    true,
    'returning `true` when the condition returns a truthy value once'
  );

  equal(
    [0, 0, -1]::some(function() {
      return ((this > 0) ? '' : 'ok');
    }),
    true,
    'returning `false` when the condition only returns falsy values'
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
      pass('executing the condition on every element when no match is found');
    }
    return (this > 0);
  });

  end();
});
