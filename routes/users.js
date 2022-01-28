import { Router } from 'express';
const router = Router();
import { sendOtp,verifyOtp,registerUser} from '../controller/userController.js';

import user from '../model/userSchema.js'
import getImageUrl from '../utils/awsConfig.js';


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/otpSend',sendOtp);
router.post('/verifyOtp',verifyOtp)
router.post('/userRegister',registerUser)
router.post('/uploadImage',(req,res)=>{
const {base64} =req.body
// console.log(base64);
getImageUrl('userPRofile',base64).then((res)=>{

  console.log(res);
  res.json({res})
}).catch(err=>console.log(err))

})

// router.post('/testOtpSend',testSend)
// router.post('/testVerify',testVerify)



export default router
