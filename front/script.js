// fetch("http://localhost:3000/user", {
//     method:"GET",
// });

//const {ajax}= $;

// ajax("http://localhost:3000/user",{
//     success(user){
//         console.log(user);
//     }
// })

// fetch("http://localhost:3000/user")
//     .then((res)=>{
//         return res.json();
//     })
//     .then((user)=> {
//         console.log(user);
//     })

//     fetch("http://localhost:3000/user", {
//     method:"POST",
//     headers: {
//         "content-type":"application/json"
//     },
//     body: JSON.stringify({
//         name: "Сергей",
//         surname: "ВВВ"
//     })
// })
//     .then((res)=> res.json())
//     .then(user => {
//         console.log(user);
//     })




// main();

// async function main() {

//     console.log("Start");
//     await delay(1111);

//     const user1 = await print();
//     console.log(user1)

//     const user2 = await creatUser({
//         name: "123",
//         surname: "В1414ВВ"
//     });
//     console.log(user2)

//     await delay(1111);


//     const user3 = await print();
//     console.log(user3)

//     await delay(1111);
//     console.log("End");

// }

async function print() {
    const res = await fetch("http://localhost:3000/user");
    const user = await res.json();

    return user
}

function delay(misec) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, misec);
    });
}

async function creatUser(data){
   const res = await fetch("http://localhost:3000/user", {
    method:"POST",
    headers: {
        "content-type":"application/json"
    },
    body: JSON.stringify(data)
})
const user = await res.json();

return user
}

Promise.resolve()
.then(() => {console.log("start")})
.then(() => {delay(2000);})
.then(() => {print();})
.then((user) => {console.log(user)})
.then(() => {delay(2000);})
.then(() => {creatUser({
    name: "234",
    surname: "345"
});})
.then(() => {delay(2000);})
.then((user) => {console.log(user)})
.then(() => {delay(2000);})
.then(() => {print();})
.then((user) => {console.log(user)})