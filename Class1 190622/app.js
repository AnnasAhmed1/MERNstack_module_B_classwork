// let mobiles = {
//     iphone: {
//         iphone13: {
//             model_name: "iphone13",
//             price: 250000,
//             camera: '50px',
//             colors: 'white',
//         },
//         iphone12: {
//             model_name: "iphone12",
//             price: 250000,
//             camera: '50px',
//             colors: 'white',
//         },
//         iphone11: {
//             model_name: "iphone11",
//             price: 250000,
//             camera: '50px',
//             colors: 'white',
//         },
//         iphoneX: {
//             model_name: "iphoneX",
//             price: 250000,
//             camera: '50px',
//             colors: 'white',
//         }
//     },
//     Samsung: {
//         s8: {
//             model_name: "s8",
//             price: 200000,
//             camera: '20px',
//             colors: 'black',
//         },
//         s7: {
//             model_name: "s7",
//             price: 200000,
//             camera: '20px',
//             colors: 'black',
//         },
//         s6: {
//             model_name: "s6",
//             price: 200000,
//             camera: '20px',
//             colors: 'black',
//         },
//         s5: {
//             model_name: "s5",
//             price: 200000,
//             camera: '20px',
//             colors: 'black',
//         },
//     },
//     Realme: {
//         c3: {
//             model_name: "c3",
//             price: 100000,
//             camera: '10px',
//             colors: 'blue',
//         },
//         c2: {
//             model_name: "c2",
//             price: 100000,
//             camera: '10px',
//             colors: 'blue',
//         },
//         c5: {
//             model_name: "c5",
//             price: 100000,
//             camera: '10px',
//             colors: 'blue',
//         },
//         c6: {
//             model_name: "c6",
//             price: 100000,
//             camera: '10px',
//             colors: 'blue',
//         },
//     },
//     Huawei: {
//         y10: {
//             model_name: "y10",
//             price: 50000,
//             camera: '5px',
//             colors: 'gold',
//         },
//         y9: {
//             model_name: "y9",
//             price: 50000,
//             camera: '5px',
//             colors: 'gold',
//         },
//         y8: {
//             model_name: "y8",
//             price: 50000,
//             camera: '5px',
//             colors: 'gold',
//         },
//         y7: {
//             model_name: "y7",
//             price: 50000,
//             camera: '5px',
//             colors: 'gold',
//         },
//     }
// }

// brandName = document.getElementById("brandName")
// phoneName = document.getElementById("phoneName")

// function searchItem() {
//     checkBrand = mobiles[brandName.value]
//     if (checkBrand == undefined) {
//         console.log("record not found")
//     }
//     else {
//         result = mobiles[brandName.value][phoneName.value]
//         if (result == undefined) {
//             console.log("record not found")
//         }
//         else {
//             console.log(result)
//         }
//     }
// }


// spread operators
arr1=[1,3,4,2]
arr2=[5,3,8,9]

// want to merge bot arrays

arr3=[...arr1,...arr2]
console.log(arr3)

// same can be done with the objects