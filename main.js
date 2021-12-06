console.log('put code in this file');
const stringy = process.argv[2];
const arr =JSON.parse(stringy);
        let max = arr[0];
        arr.forEach((num)=> {
            if(max < num) {
            max =num;
            }
            {max > num}
        });
console.log("the max no is:", max );
console.log(Math.min(...arr));
console.log(typeof arr);