

// function test() {
//     console.log(a);
//     console.log(foo());

//     var a = 1;

//     function foo() {
//         return 2;
//     }
// }
 
// test();

// function magic(x) {
//     return function (y) {
//         return function (z) {
//             return x * y * z;
//      }
//  }
// }

// console.log(magic(2)(3)(4));

// const list = [8, 9, 10, 11, 12]
// const [,...arr,] = list;
// console.log(arr);


function chall1(str) {
    const BORDER_CASE = "X";
    const values = [
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "ll", "m", "n", "o", "p", "q", "r", "s", "t", "y", "z",
        "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
    ];
    const specials = ["*", "!", "·", "#"];

    const sanitizedStr = str.replace("ll", BORDER_CASE);
    const strList = sanitizedStr.split("");

    const newList = [];
    let newValue;
    let index;

    strList.forEach(element => {
        if (specials.includes(element)) {
            newValue = element;
        } else {
            if (element === BORDER_CASE) {
                newValue = "m";
            } else {
                index = values.indexOf(element);
                newValue = values[index + 1];
            }
        }

        newList.push(newValue);
    });

    console.log(newList.toString().replaceAll(',', ''));
}

chall1("hello*3");
