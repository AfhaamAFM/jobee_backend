import AWS from 'aws-sdk'
import {Buffer} from 'buffer'



const {S3} =AWS
const {AWS_ACCESS_KEY,AWS_SECRET_KEY} =process.env

const s3Url ='https://jobeebucket.s3.us-east-2.amazonaws.com/userProfile/'

// buffer convert

function getImgBuffer(base64){

    const base64Str =base64.replace(/^data:image\/\w+;base64,/,'');
    return Buffer.from(base64Str,'base64');
}

//@desc aws config 
AWS.config.update({

accessKeyId:AWS_ACCESS_KEY,
secretAccessKey:AWS_SECRET_KEY,
region:'us-east-2'

},()=>{

    console.log("Aws connected");
})


const s3Bucket = new AWS.S3({params:{Bucket:'jobeebucket'}})


const imageUpload=(path,buffer)=>{ 

const data ={
    Key:path,
    Body:buffer,
    ContentEncoding:'base64',
    ContentType:'image/jpeg',
    ACL:'public-read'
    
};

return new Promise((resolve,reject)=>{
s3Bucket.putObject(data,(err)=>{

    if(err){
        reject(err)
    }
    else{
        resolve(s3Url+path)
    }
    
})

})
}

const getImageUrl =(type,base64Image)=>{

return new Promise((resolve,reject)=>{

const buffer =getImgBuffer(base64Image);
console.log(buffer);
const currentTime =new Date().getTime();
imageUpload(`${type}/${currentTime}.jpeg`,buffer).then((res)=>{

    console.log('SSSSSSSSSSSSSSSSSS',res);
})


})


}

export default getImageUrl;




