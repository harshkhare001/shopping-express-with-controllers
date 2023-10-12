const path = require('path');
exports.contact=(req,res,next)=>{
    
    res.sendFile(path.join(__dirname,'../','views','contact.html'));
}
