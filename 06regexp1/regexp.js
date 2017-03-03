'use strict';

let text = [
    '18812011232',  // 测试结果应该为 true
    '18812312',     // false
    '12345678909',  // false
    'foo foo bar',       // true
    'foo bar foo',       // false  有重复单词但是不相邻
    'foo  barbar bar'   // false
];

let pattern1 = /^1[34578]\d{9}$/;
let pattern2 = /(?:^|\s)([a-zA-Z]+)\s+\1(?:\s|$)/;

for (let i = 0; i < 6; i++) {
    if (i < 3) {
        console.log(pattern1.test(text[i]) + '\t', text[i]);
    } else {
        console.log(pattern2.test(text[i]) + '\t', text[i]);
    }
}