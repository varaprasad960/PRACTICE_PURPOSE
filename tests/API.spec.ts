// import {test, expect, request} from '@playwright/test'

// test('api testing', async({request})=>{
// //get request
//     // const repsonse  = await request.get("https://reqres.in/api/users?page=2");
//     // console.log("the response code is:", repsonse.status());



//     //post request
//     // const payload ={
        
//     //         name: "morpheus",
//     //         job: "leader"
        
//     // }

//     // const response = await request.post("https://reqres.in/api/users", {data : payload});

//     // console.log("the response code is:", response.status());

//     // const jsonbody = await response.json();
//     // console.log("the response body is:", jsonbody);



//     //put request

//     const updatedpayload= {
//         name : "morpheus",
//         job : "zion resident"
//     }

//     const response  = await request.put("https://reqres.in/api/users/2", {data : updatedpayload});
//     console.log("the status code for updation is:", response.status());

//     const jsonbd = await response.json();
//     console.log("the data is:", jsonbd);

//     let numbers = [15, 41,54,36,78,91,101]
//     const oddnumbr = numbers.filter(num =>num%2==0);
//     console.log("the even nmbrs are:", oddnumbr);





// let name = "playwright tool";
// let reversedName = "";

// // Use a for...of loop to iterate through the string
// for (let char of name) {
//     reversedName = char + reversedName; // Prepend each character to the result
// }

// console.log(reversedName);

    

//  })


