//file system

const fs = require('fs');
const path = require('path');

//create folder
// fs.mkdir(path.join(__dirname,'/test'),{},err =>{
//     if(err) throw err;
//     console.log("folder created....");
// });

// //create and write file   write overwrites the previous data in file instead use append
// fs.writeFile(path.join(__dirname,'/test','hello.txt'),'hello world , My first node lesson.',err =>{
//     if(err) throw err;
//     console.log("file written to....");
// });

// // append exixting file
// fs.appendFile(path.join(__dirname,'/test','hello.txt'),'And i\'m loving it',err =>{
//     if(err) throw err;
//     console.log("file written to....");
// });

//read a file

// fs.readFile(path.join(__dirname,'/test','hello.txt'),'utf8',(err,data) =>{
//         if(err) throw err;
//         console.log(data);
//     });

    //rename a file
    fs.rename(
        path.join(__dirname,'/test','hello.txt'),
        path.join(__dirname,"/test",'helloWorld.txt'), err=>{
            if(err) throw err
            console.log('file renamed...');
        }
    );