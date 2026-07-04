import { strict as assert } from 'assert';
import { greet } from './index.js';

// Simple test
assert.equal(greet('World'), 'Hello, World!');
assert.equal(greet('GitHub'), 'Hello, GitHub!');

console.log('All tests passed!');
