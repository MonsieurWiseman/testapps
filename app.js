/* Setup modules and config*/

const fs = require("fs");
const path = require("path");
var config = "node_conf.json";

var conf  = JSON.parse(fs.readFileSync(config));

function Walk(currentpath, parentpath){
    console.log(currentpath);
    fs.fstat(fs.openSync(currentpath, 'r'), (err, stats) =>{
        if (stats.isDirectory()){
            fs.readdir(currentpath, (err, files) =>{
                files.forEach(file =>{
                    Walk(currentpath+file);
                })
            })
        };
        if (stats.isFile()){ console.log("fichier : "+ currentpath)};
    });
};

Walk(conf.storagePath);