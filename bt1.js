// Câu 1: Cho một chuỗi str, tìm ký tự không lặp lại đầu tiên trong chuỗi đó và trả về chỉ số của nó.Nếu nó không tồn tại, trả về -1.
// case1
// Input: str = "tranduong"
// Output: 0
// case2
// Input: str = "hitclubhiuhiu"
// Output: 2
// case3
// Input: str = "aabb"
// Output: -1
const str = "tranduong";
const str2 = "hitclubhiuhiu";
const str3 = "aabb";
const check = (str) => {
    let search = {};
    for(char of str){
        if(search[char] = search.hasOwnProperty(char)){
            ++search[char];
        }
        search[char] = 1;
    }
    for(const num in search){
        if(search[num] === 1){
            return str.indexOf(num);
        }
     
    }
    return -1;
}
console.log(check(str));