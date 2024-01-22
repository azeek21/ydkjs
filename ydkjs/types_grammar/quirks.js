/**
 * "0" == null; // false
 * "0" == undefined; // false
 * "0" == false; // true -- UH OH!
 * "0" == NaN; // false
 * "0" == 0; // true
 * "0" == ""; // false
 * false == null; // false
 * false == undefined; // false
 * false == NaN; // false
 * false == 0; // true -- UH OH!
 * false == ""; // true -- UH OH!
 * false == []; // true -- UH OH!
 * false == {}; // false
 * "" == null; // false
 * "" == undefined; // false
 * "" == NaN; // false
 * "" == 0; // true -- UH OH!
 * "" == []; // true -- UH OH!
 * "" == {}; // false
 * 0 == null; // false
 * 0 == undefined; // false
 * 0 == NaN; // false
 * 0 == []; // true -- UH OH!
 * 0 == {}; // false
 */
