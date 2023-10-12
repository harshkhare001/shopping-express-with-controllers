const products = [];
const fs = require('fs');

const path = require('path');

const getProdutsFromFile = (callback)=>{
    const p = path.join(__dirname,'../data','products.json');
        fs.readFile(p,(err,fileContent)=>{
            if(err)
            {
                callback([]);
            }
            else{
                callback(JSON.parse(fileContent));
            }
        })
}

module.exports = class Product{
    
    constructor(title)
    {
        this.title = title;
    }
    
    save()
    {
        const p = path.join(__dirname,'../data','products.json');
        getProdutsFromFile(products=>{
            products.push(this);
            fs.writeFile(p,JSON.stringify(products),(err)=>{
                console.log(err);
            });
        });      
    }

    static fetchAll(callback)
    {
        getProdutsFromFile(callback);
    }
}
