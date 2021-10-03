//1. Reverse
// function reverseArray(array){
//     for(i = 0; i < array.length; i++){
//         if(i < array.length/2){
//             var temp = array[i];
//             array[i] = array[array.length - i -1];
//             array[array.length - i -1] = temp;
//             console.log(array);
//         }
//     }
// }
// myArr = [1,2,3,4,5,6,7,8,9];
// reverseArray(myArr);


//2. Rotate
function rotateArr(array, shiftBy){
    if(shiftBy > 0){
        if(shiftBy < array.length){
            for(var i = 0; i < shiftBy; i++){
                var temp = array[array.length-1];
                for(var k = array.length-2;k >= 0; k--){
                    array[k+1] = array[k];
                }
                array[0] = temp;
            }
            console.log(array);
            } else {
                console.log("shiftBy parameter cannot exceed size of given array")
        }
    } else {
        for(var i = array.length-1; i >= 0; i--){
            var temp = array[0];
            console.log(array[i])
            for(var k = array.length;k <= 0; k--){
                console.log(k);
                array[k-1] = array[k];
            }
            array[0] = temp;
        }
        console.log(array);
    }
}
myArr = [1,2,3,4,5,6,7,8,9];
rotateArr(myArr, 2);



//3. Filter Range
// function filterRange(array, min, max){
//     for(i = 0; i < array.length; i++){
//         if(array[i] > min && array[i] < max){
//             console.log(array[i]);
//         }
//     }
// }
// myArr = [1,2,3,4,5,6,7,8,9];
// filterRange(myArr,3,7);

//4. Concat
// function addArrays(array1, array2){
//     var newArray= [];
//     for(var i = 0; i < array1.length; i++){
//         newArray[i] = array1[i];
//     }
//     for(var i = array1.length; i < (array1.length + array2.length); i++){
//         console.log(array1.length + array2.length);
//         newArray[i] = array2[i-(array1.length)];
//     }
//     console.log(newArray);
// }
// myArr1 = [1,2,3,4,5];
// myArr2 = [9,8,7,6,5];
// addArrays(myArr1,myArr2);