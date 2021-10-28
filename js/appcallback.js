const http = new easyHTTP;
//GET Data

http.get('https://jsonplaceholder.typicode.com/posts/1',function(err,posts){
if(err){
console.log(err);
}
else{console.log(posts);}
});



const data = [{
    title: 'custompost',
    body: 'This is custom post'
},
{
    title: 'custompost2',
    body: 'This is custom post two'
}]

// const user = {
//     "identifyId": "VS-1",
//     "email": "visualstudio@msn.com",
//     "propertyKeys": [
//                 "AP-6WAJA3OATHHI-2"
//     ]
// }


//CREATE DATA
http.post('https://jsonplaceholder.typicode.com/posts', data, function (err, post) {
    if (err) {
        console.log(err);
    } else {
        console.log(post);
    }
});

//UPDATE DATA

// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function (err, post) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });

//DELETE DATA
// http.delete('https://jsonplaceholder.typicode.com/posts/1',function(err,response){
// if(err){
// console.log(err);
// }
// else{console.log(response);}
// });

/*https://jsonplaceholder.typicode.com/posts , https://app-be.aptrinsic.com/v1/users */