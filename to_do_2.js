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
    if(shiftBy >= array.length/2){
        for(i = array.length-1; i >= shiftBy; i--){
            array[i-array.length+1] = array[i-array.length];
        console.log(array[i]);
        }
    } else if(shiftBy<= array.length/2){
        for(i = 0; i < shiftBy; i++){
            console.log(array[i]);
        }
    }
    console.log(array);
}
myArr = [1,2,3,4,5,6,7,8,9,10];
rotateArr(myArr,5)



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