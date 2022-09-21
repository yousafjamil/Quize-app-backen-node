const  mongoose=require('mongoose');



const Dbconnection=async( )=>{
try {
 mongoose.connect(db-url-here)
     console.log('db connected....')
} catch (error) {
    console.log('db not connected')
}

}

module.exports=Dbconnection;