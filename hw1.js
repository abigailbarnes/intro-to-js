// hw1.js: hw1 main code
// Copyright (C)  2022 University of Chicago. All rights reserved.
/*
This is only for students and instructors in the 2022 CMSC 23900 ("DataVis") class, for use in that
class. It is not licensed for open-source or any other kind of re-distribution. Do not allow this
file to be copied or downloaded by anyone outside the 2022 DataVis class.

This is the ONLY file you modify for the coding portion of hw1, and it the only file for which you
should svn commit modifications.  Do not "svn add" and "svn commit" any other files for the coding
portion of hw1.  This file keeps to 100 columns, except for long URLs.

Follow the directions in each function (e.g. unaplus(), pfl(), etc.) to add code (often just a
single "ret = " assignment statement) to make the function return match the 'ref' value in the
subsequent answer component.  You should only be adding code inside regions delimited by "begin
student code" and "end student code", and you should not be modifying any other code.  You're
seeing all that other code so that the assignment is more self-contained and transparent.  A
consequence of being restricted to student code blocks for this assignment is the unnatural
sequence of "ret = null;" initialization followed by "ret = ..." in your code, but this structure
is intended to facilitate faster grading.

For this assignment only, the number of lines of code that you add in the student code block should
match whatever was in the reference solution; "(1L in ref)" means the reference code had 1 line;
"(3L in ref)" means it had 3.  This otherwise totally artificial and unrealistic constraint is just
to push you towards doing the intended thing for this intro-to-JavaScript assignment.

Also for this assignment only, there is absolutely no need to document your code (normally we will
want you to document your code enough so that we can see that it is the result of intentional and
thoughtful authorship, rather than copy-pasting or random searching).
*/
/*
NOTE: Document here (after the "begin student code" line)
// v.v.v.v.v.v.v.v.v.v.v.v.v.v.v  begin student code
// ^'^'^'^'^'^'^'^'^'^'^'^'^'^'^  end student code
anyone or anything extra you used for this work.  Besides your instructor and TA who else did you
work with?  What other code or web pages helped you understand what to do and how to do it?  It is
not a problem to use more help to do this work!  This is just to help the instructor know about
other useful resources, and to help the graders understand sources of code similarities (though
for this particular hw1 assignment, with its simple structure, code similarities will obviously
arise naturally).
*/

'use strict';

// answer objects will accumulate in this
let ans = [];

// --------------------------------------------
function unaplus(x) { // x is a string
  // info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus
  // TODO: convert x into a number with unary +
  let ret = null;
  // v.v.v.v.v.v.v.v.v.v.v.v.v.v.v  begin student code
  ret = +x;
  // ^'^'^'^'^'^'^'^'^'^'^'^'^'^'^  end student code (1L in ref)
  return ret;
}
ans.push({
  ref: 239 /* <---- This is the value that unaplus() should return;
                    not by "ret = 239;", but by following the TODO directions */,
  stu: unaplus('239'),
  name: 'unaplus0',
});
ans.push({
  ref: 54321,
  stu: unaplus('54321'),
  name: 'unaplus1',
});

// --------------------------------------------
function pfl(x) {
  // x is a string
  // info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat
  // TODO: convert x into a number with parseFloat *function*
  let ret = null;
  // v.v.v.v.v.v.v.v.v.v.v.v.v.v.v  begin student code
  ret = parseFloat(x);
  // ^'^'^'^'^'^'^'^'^'^'^'^'^'^'^  end student code (1L in ref)
  return ret;
}
ans.push({
  ref: 42,
  stu: pfl('42'),
  name: 'pfl0',
});
ans.push({
  ref: 23423,
  stu: pfl('      23423 and more'), // look at everything not converted to a number!
  name: 'pfl1',
});

// --------------------------------------------
function gogotrcm() { // go go trailing comma!!
  // info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Trailing_commas
  /* TODO: return the array [1,2,3], using a multi-line array literal ("ret = [" on the first line,
  one line per array element, and "];" on the last line). USE A TRAILING COMMA on the last element.
  The only point here is to help you get in the habit of using trailing commas. You should think of
  a comma as something that always follows array elements (and property:value pairs in array
  literals), rather than as a separator between items. */
  let ret = null;
  // v.v.v.v.v.v.v.v.v.v.v.v.v.v.v  begin student code
  ret = [
    1,
    2,
    3,
  ];
  // ^'^'^'^'^'^'^'^'^'^'^'^'^'^'^  end student code (5L in ref)
  return ret;
}
ans.push({
  ref: [1, 2, 3],
  stu: gogotrcm(),
  name: 'gogotrcm',
});

// --------------------------------------------
function jnsp(x, y, z) {
  // info: https://www.samanthaming.com/tidbits/15-4-ways-to-combine-strings/
  // TODO: join parameters x,y,z (assume they're strings) together with + operator
  let ret = null;
  // v.v.v.v.v.v.v.v.v.v.v.v.v.v.v  begin student code
  ret = x + y + z;
  // ^'^'^'^'^'^'^'^'^'^'^'^'^'^'^  end student code (1L in ref)
  return ret;
}
ans.push({
  ref: '3four56',
  stu: jnsp('', '3four5', '6'),
  name: 'jnsp0',
});
ans.push({
  ref: '9hello',
  stu: jnsp(9, 'hello', []) /* whoa; look at that type coercion go!
                            info: https://javascript.info/type-conversions */,
  name: 'jnsp1',
});

// --------------------------------------------
/* btw the "WAT" in the next two function names is in tribute to
https://www.destroyallsoftware.com/talks/wat (making fun of JS starts around 1:20)
Some explanations are here
https://medium.com/dailyjs/the-why-behind-the-wat-an-explanation-of-javascripts-weird-type-system-83b92879a8db
*/

function detcWAT() {
  // info: (more on type coercion) https://exploringjs.com/deep-js/ch_type-coercion.html
  // info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null
  /* TODO: return the correct array of boolean (literal) values. If you wanted to not learn
  anything from this, you could just copy the answer from how the browser displays the ref value,
  but the idea here is that you take some time to think and learn about *why* the answers are this
  way for each element of the array. */
  let ret = null;
  // v.v.v.v.v.v.v.v.v.v.v.v.v.v.v  begin student code
  ret = [true, true, true, true, true, true, false, false, true];
  // ^'^'^'^'^'^'^'^'^'^'^'^'^'^'^  end student code (1L in ref)
  return ret;
}
ans.push({
  ref: [
    '1' == [1],
    '' == false,
    '0' == false,
    [] == false,
    [[]] == false,
    null == undefined,
    NaN == false,
    NaN == NaN,
    3 == 3.0000000000000001, // finite precision of float-point!
  ],
  stu: detcWAT(),
  name: 'detcWAT',
});

// --------------------------------------------
function tetcWAT() {
  // info https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
  /* TODO: return the correct array of boolean literal values, like detcWAT above, but now with
  triple equality === instead of double equality == */
  let ret = null;
  // v.v.v.v.v.v.v.v.v.v.v.v.v.v.v  begin student code
  ret = [false, false, false, false, false, false, false, false, true];
  // ^'^'^'^'^'^'^'^'^'^'^'^'^'^'^  end student code (1L in ref)
  return ret;
}
ans.push({
  ref: [
    '1' === [1],
    '' === false,
    '0' === false,
    [] === false,
    [[]] === false,
    null === undefined,
    NaN === false,
    NaN === NaN,
    3 === 3.0000000000000001, // finite precision of float-point!
  ],
  stu: tetcWAT(),
  name: 'tetcWAT',
});

// --------------------------------------------

const taa = [
  { cat: 'A', dog: 1, panda: 'p', },
  { cat: 'B', dog: 2, fox: 'f', },
  { cat: 'C', dog: 3, mouse: 'm', },
  { cat: 'D', dog: 4, horse: 'h', },
  { cat: 'X', },
  { cat: 'Y', dog: 6, },
  { cat: 'Z', panda: 'p', },
];

function getpropdot(aa) {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors
  /* TODO: return an array of the 'cat' property of the elements in the given array. Get the
  property with '.' because 'cat' is a literal and not a variable.  */
  let ret = null;
  // v.v.v.v.v.v.v.v.v.v.v.v.v.v.v  begin student code
  ret = [taa[0].cat, taa[1].cat, taa[2].cat, taa[3].cat, taa[4].cat, taa[5].cat, taa[6].cat];
  // ^'^'^'^'^'^'^'^'^'^'^'^'^'^'^  end student code (1L in ref)
  return ret;
}
ans.push({
  ref: ['A', 'B', 'C', 'D', 'X', 'Y', 'Z',],
  stu: getpropdot([...taa]),
  name: 'getpropdot',
});

// --------------------------------------------
function adds(x, y, z) {
  // info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#instance_methods
  // TODO: sum parameters x,y,z with +, then convert to string with a Number method
  let ret = null;
  // v.v.v.v.v.v.v.v.v.v.v.v.v.v.v  begin student code
  ret = (x + y + z).toString();
  // ^'^'^'^'^'^'^'^'^'^'^'^'^'^'^  end student code (1L in ref)
  return ret;
}
ans.push({
  ref: '14',
  stu: adds(2, 3, 9),
  name: 'adds0',
});
ans.push({
  ref: '16',
  stu: adds(2.0000000000000001, 0.5, 13.5),
  name: 'adds1',
});

// --------------------------------------------
function tolo() {
  let x = 'THIS WAS LOUD';
  // info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#instance_methods
  // TODO: make x lower case with a String method
  let ret = null;
  // v.v.v.v.v.v.v.v.v.v.v.v.v.v.v  begin student code
  ret = x.toLowerCase();
  // ^'^'^'^'^'^'^'^'^'^'^'^'^'^'^  end student code (1L in ref)
  return ret;
}
ans.push({
  ref: 'this was loud',
  stu: tolo(),
  name: 'tolo',
});

// --------------------------------------------
function templit(a, b) {
  // info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
  /* TODO: From (numeric) parameters a and b, return the string 'The sum of a and b is a+b.' where
  "a", b", and "a+b" are replaced with the values of a, b, and a+b, respectively. YOU SHOULD USE a
  `` template literal (or template string), NOT "+". */
  let ret = null;
  // v.v.v.v.v.v.v.v.v.v.v.v.v.v.v  begin student code
  ret = `The sum of ${a} and ${b} is ${a + b}.`;
  // ^'^'^'^'^'^'^'^'^'^'^'^'^'^'^  end student code (1L in ref)
  return ret;
}
ans.push({
  ref: 'The sum of 3 and 5 is 8.',
  stu: templit(3, 5),
  name: 'templit0',
});
ans.push({
  ref: 'The sum of 10.5 and -10.5 is 0.',
  stu: templit(10.5, -10.5),
  name: 'templit1',
});

/*
NOTE: the remaining functions are called with an array argument. You should use the .map array
method unless otherwise indicated, together with an arrow function expression, to create a new
array that is returned. info:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
*/
// --------------------------------------------
function adder(aa) {
  // TODO: return array of values 1 greater than the values (assume numeric) in given array
  let ret = null;
  // v.v.v.v.v.v.v.v.v.v.v.v.v.v.v  begin student code
  ret = aa.map(x => 1 + x);
  // ^'^'^'^'^'^'^'^'^'^'^'^'^'^'^  end student code (1L in ref)
  return ret;
}
ans.push({
  ref: [],
  stu: adder([]),
  name: 'adder0',
});
ans.push({
  ref: [0, 1, 2, 3, 4, 6.5],
  stu: adder([-1, 0, 1, 2, 3, 5.5]),
  name: 'adder1',
});

// --------------------------------------------
function doubler(aa) {
  // TODO: return array of values that are double those in the given array
  let ret = null;
  // v.v.v.v.v.v.v.v.v.v.v.v.v.v.v  begin student code
  ret = aa.map(x => x * 2);
  // ^'^'^'^'^'^'^'^'^'^'^'^'^'^'^  end student code (1L in ref)
  return ret;
}
ans.push({
  ref: [200, 400, 600],
  stu: doubler([100, 200, 300]),
  name: 'doubler0',
});
ans.push({
  ref: [-2, 0, 2, 4, 6, 11],
  stu: doubler([-1, 0, 1, 2, 3, 5.5]),
  name: 'doubler1',
});

// --------------------------------------------
function squarer(aa) {
  /* info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators
     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#arithmetic_operators */
  /* TODO: return array of square all values (assume numeric) in the given array. Use an arithmetic
  operator to do the squaring, not a function */
  let ret = null;
  // v.v.v.v.v.v.v.v.v.v.v.v.v.v.v  begin student code
  ret = aa.map(x => x * x);
  // ^'^'^'^'^'^'^'^'^'^'^'^'^'^'^  end student code (1L in ref)
  return ret;
}
ans.push({
  ref: [100, 10000],
  stu: squarer([-10, 100]),
  name: 'squarer0',
});
ans.push({
  ref: [1, 0, 1, 4, 9, 30.25],
  stu: squarer([-1, 0, 1, 2, 3, 5.5]),
  name: 'squarer1',
});

// --------------------------------------------
function modulo(N, aa) {
  /* TODO: use .map and an arithmetic operator to change each value x in the given array with the
  remainder of dividing x by N */
  let ret = null;
  // v.v.v.v.v.v.v.v.v.v.v.v.v.v.v  begin student code
  ret = aa.map(x => x % N);
  // ^'^'^'^'^'^'^'^'^'^'^'^'^'^'^  end student code (1L in ref)
  return ret;
}
ans.push({
  ref: [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0,],
  stu: modulo(2, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14,]),
  name: 'modulo2',
});
ans.push({
  ref: [0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 2, 3, 4,],
  stu: modulo(5, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14,]),
  name: 'modulo5',
});

// --------------------------------------------
function sfxer(aa, sfx) {
  // TODO: use .map to add suffix sfx to all elements (assume string) in given array
  let ret = null;
  // v.v.v.v.v.v.v.v.v.v.v.v.v.v.v  begin student code
  ret = aa.map(str => str + sfx);
  // ^'^'^'^'^'^'^'^'^'^'^'^'^'^'^  end student code (1L in ref)
  return ret;
}
ans.push({
  ref: ['foo', 'bar', 'bob'],
  stu: sfxer(['foo', 'bar', 'bob'], ''),
  name: 'sfxer0',
});
ans.push({
  ref: ['foo.txt', 'bar.txt', 'bob.txt'],
  stu: sfxer(['foo', 'bar', 'bob'], '.txt'),
  name: 'sfxer1',
});

// --------------------------------------------
function filtels(aa) {
  // info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder
  // info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT
  /* TODO: use .filter() to make an array of only the even-length strings in the given array of
  strings */
  let ret = null;
  // v.v.v.v.v.v.v.v.v.v.v.v.v.v.v  begin student code
  ret = aa.filter(str => str.length % 2 == 0);
  // ^'^'^'^'^'^'^'^'^'^'^'^'^'^'^  end student code (1L in ref)
  return ret;
}
ans.push({
  ref: ['', 'bc', 'ghij'],
  stu: filtels(['', 'a', 'bc', 'def', 'ghij']),
  name: 'filtels0',
});
ans.push({
  ref: ['this', 'is', 'ok'],
  stu: filtels(['this', 'is', 'not', 'ok']),
  name: 'filtels1',
});

// --------------------------------------------
function mchain(aa, sep) {
  /* info: https://blog.segunolalive.com/posts/understanding-method-chaining-in-javascript/
     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join */
  /* TODO: Use method chaining with .filter, .map, and .join.  Return the concatenation (separated
  by string sep) of the string representations of an array of numbers, each of which is three times
  an odd number in the given array. That is, .filter on the odd numbers, then .map multiplication
  by 3, and then .join via sep. You should be writing only ONE assignment statement. */
  let ret = null;
  // v.v.v.v.v.v.v.v.v.v.v.v.v.v.v  begin student code
  ret = aa.filter(x => x % 2 == 1).map(x => (x * 3).toString()).join(sep);
  // ^'^'^'^'^'^'^'^'^'^'^'^'^'^'^  end student code (4L in ref)
  return ret;
}
ans.push({
  ref: '3 - 9 - 15 - 21 - 27',
  stu: mchain([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], ' - '),
  name: 'mchain0',
});
ans.push({
  ref: '273,279,285,291,297',
  stu: mchain([91, 92, 93, 94, 95, 96, 97, 98, 99], ','),
  name: 'mchain1',
});

// --------------------------------------------
const numbers0 = [
  30.4745035, -1.06900764, 6.977633, -1.89196932, 2.88822603, -5.6483093, 2.08128285, -5.5192662,
  0.353782058, 0.000123,
];
const numbers1 = [
  3.04745035, -0.106900764, 0.6977633, -0.189196932, 0.288822603, -0.56483093, 0.208128285,
  -0.55192662, 0.0353782058, 0.0000123,
];
// info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
/* TODO: return the arithmetic mean of the numeric values in the array, using (in 3 lines of code):
a new local variable as the accumulator,
the array's .forEach method and .length property, and an arrow function (but NOT a for loop),
and finally an assignment to "ret". */
function fmeaner(aa) {
  let ret = null;
  // v.v.v.v.v.v.v.v.v.v.v.v.v.v.v  begin student code
  let sum = 0.0;
  aa.forEach(x => sum += x);
  ret = sum / aa.length;
  // ^'^'^'^'^'^'^'^'^'^'^'^'^'^'^  end student code (3L in ref)
  return ret;
}
ans.push({
  ref: 2.8646997978,
  stu: fmeaner([...numbers0]),
  name: 'fmeaner0',
});
ans.push({
  ref: 0.28646997978,
  stu: fmeaner([...numbers1]),
  name: 'fmeaner1',
});

// --------------------------------------------
function rmeaner(aa) {
  // info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
  /* TODO: find the mean of the (numeric) array values in a single line, using the .reduce array
  method and an arrow function (and the .length property). Note: the array function expression
  passed to .reduce should have both current value and accumulator parameters, and you need to name
  these parameters "crr" and "ack", respectively (to discourage thoughtless copying of code you
  might find elsewhere) */
  let ret = null;
  // v.v.v.v.v.v.v.v.v.v.v.v.v.v.v  begin student code
  ret = aa.reduce((ack, crr) => ack += crr) / aa.length;
  // ^'^'^'^'^'^'^'^'^'^'^'^'^'^'^  end student code (1L in ref)
  return ret;
}
ans.push({
  ref: 2.8646997978,
  stu: rmeaner([...numbers0]),
  name: 'rmeaner0',
});
ans.push({
  ref: 0.28646997978,
  stu: rmeaner([...numbers1]),
  name: 'rmeaner1',
});

// --------------------------------------------
function strdesc(aa) {
  // info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#advanced_syntax
  /* TODO: return an array that replaces each (string-valued) element ss of given array with a
  two-property object dsc, such that dsc.str == ss, and dsc.len == length of ss. Use .map() with an
  arrow function mapping to an object literal. */
  let ret = null;
  // v.v.v.v.v.v.v.v.v.v.v.v.v.v.v  begin student code
  ret = aa.map(ss => ({ str: ss, len: ss.length }));
  // ^'^'^'^'^'^'^'^'^'^'^'^'^'^'^  end student code (1L in ref)
  return ret;
}
ans.push({
  ref: [{ str: 'XY', len: 2 }],
  stu: strdesc(['XY']),
  name: 'strdesc0',
});
ans.push({
  ref: [
    { str: 'a', len: 1 },
    { str: 'bcd', len: 3 },
    { str: '', len: 0 },
    { str: 'even more stuff', len: 15 },
  ],
  stu: strdesc(['a', 'bcd', '', 'even more stuff',]),
  name: 'strdesc1',
});

// --------------------------------------------
/* TODO: for each object-valued element of the given array aa of objects, add (in-place, using an
arrow function with forEach) a new property called 'idx' having a value that is the index of that
object in the array.  For fun, your arrow function should have THREE parameters, the third being an
array name other than "aa".
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach */
function addidx(aa) {
  // v.v.v.v.v.v.v.v.v.v.v.v.v.v.v  begin student code
  aa.forEach(function (x, index) { x['idx'] = index});
  // ^'^'^'^'^'^'^'^'^'^'^'^'^'^'^  end student code (1L in ref)
  return aa;
}
ans.push({
  ref: [{ foo: 'bar', idx: 0, }],
  stu: addidx([{ foo: 'bar', }]),
  name: 'addidx0',
});
ans.push({
  ref: [
    { a: 3, idx: 0, },
    { b: 'foo', c: 239, idx: 1, },
    { arr: [1, 2, 3], len: 3, idx: 2, },
  ],
  stu: addidx([{ a: 3, }, { b: 'foo', c: 239, }, { arr: [1, 2, 3], len: 3, }]),
  name: 'addidx1',
});

// --------------------------------------------
function getfoo(aa) {
  // info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
  /* TODO: from given array of objects, make a new array that replaces each object oo with oo.foo,
  if 'foo' is a property of oo, or 'nope' if 'foo' is not a property of oo. Use the (recently added
  to ES) nullish-coalescing "??" operator on oo.foo */
  let ret = null;
  // v.v.v.v.v.v.v.v.v.v.v.v.v.v.v  begin student code
  ret = aa.map(oo => oo.foo ?? 'nope');
  // ^'^'^'^'^'^'^'^'^'^'^'^'^'^'^  end student code (1L in ref)
  return ret;
}
ans.push({
  ref: [239],
  stu: getfoo([{ foo: 239, bar: 2, bingo: [14, 4, 3] }]),
  name: 'getfoo0',
});
ans.push({
  ref: [3, 99, 'nope'],
  stu: getfoo([{ foo: 3, bar: 2 }, { foo: 99 }, { bar: -6 }]),
  name: 'getfoo1',
});

// --------------------------------------------
function getpropbrac(aa, prp) {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
  /* TODO: return an array of the prp property of the elements in the given array, or 'nope' if the
  element does not have a prp property (via nullish-coalescing). Get the property with [] because
  prp is a variable and not a constant */
  let ret = null;
  // v.v.v.v.v.v.v.v.v.v.v.v.v.v.v  begin student code
  ret = aa.map(x => x[prp] ?? 'nope');
  // ^'^'^'^'^'^'^'^'^'^'^'^'^'^'^  end student code (1L in ref)
  return ret;
}
ans.push({
  ref: ['A', 'B', 'C', 'D', 'X', 'Y', 'Z',],
  stu: getpropbrac([...taa], 'cat'),
  name: 'getpropbrac0',
});
ans.push({
  ref: [1, 2, 3, 4, 'nope', 6, 'nope',],
  stu: getpropbrac([...taa], 'dog'),
  name: 'getpropbrac1',
});
ans.push({
  ref: ['nope', 'nope', 'm', 'nope', 'nope', 'nope', 'nope'],
  stu: getpropbrac([...taa], 'mouse'),
  name: 'getpropbrac2',
});

// --------------------------------------------
export { ans as answer };
