// Câu 2: Cộng một đơn vị vào mảng số nguyên
 digits = [1,2,3]
// Output: [1,2,4]
 
digits2 = [0]
// Output: [1]
 
digits3 = [9]
// Output: [1,0]
const number = (arr) => {
    let search = "";
    arr = arr.join("");
    arr = Number(arr);
    arr++;
    arr = arr.toString().split("");
    arr = arr.map(
        function (index) {
            return Number(index);
        }
    )
    console.log(arr);
}
number(digits);
number(digits2);
number(digits3);