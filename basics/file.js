const fs = require("fs");

const quote = "hey sundar you can do it 💕💕💕💕";
// const input = +process.argv[2];

// for(let i=1; i<=input; i++){
//     fs.writeFile(`./backup/text-${i}.html`, quote, (err)=>{
//         console.log("completed writing");
//     })
// }


// fs.writeFile("cool.txt", quote, (err)=>{
//      console.log("completed writing");
// });




// fs.readFile("./cool.txt","utf-8",(err,data)=>{
//      if(err){
//           console.log("something went wrong",err)
//      }
//      else{
//           console.log(data)
//      }
// });

// const quote3="\nyou are the wonderful person i sawever";
// fs.appendFile("./cool.txt",quote3,(err)=>{
//      console.log("updated file")
// })


fs.unlink("./delete-file.css",(err)=>{
     console.log("deletefile")
})