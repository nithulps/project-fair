const fs = require ('fs')

 getFileData =()=>{
    fs.readFile('./sample.txt','utf-8',(err,data)=>{
        if(err) throw err

        console.log(data);

    })
 }

 module.exports = {getFileData}
 

 