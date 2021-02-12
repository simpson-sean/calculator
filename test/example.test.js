// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { add , sub, mul, div } from '../utilities.js';

const test = QUnit.test;

test('time to test ADDITION', (expect) => {
    const x = 4;
    const y = 5;
    const sum = 9;
    const addResult = add(x, y);
    expect.equal(addResult, sum);

});


test('time to test SUBTRACTION', (expect) => {
    const x = 10;
    const y = 8;
    const sum = 2;
    const subResult = sub(x, y);
    expect.equal(subResult, sum);

});

test('time to test MULTIPLICATION', (expect) => {
    const x = 5;
    const y = 5;
    const sum = 25;
    const mulResult = mul(x, y);
    expect.equal(mulResult, sum);

});

test('time to test DIVISION', (expect) => {
    const x = 20;
    const y = 5;
    const sum = 4;
    const divResult = div(x, y);
    expect.equal(divResult, sum);

});