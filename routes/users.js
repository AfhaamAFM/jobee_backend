import { Router } from 'express';
const router = Router();
import { sendOtp,verifyOtp,testSend,testVerify} from '../controller/userController.js';



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/otpSend',sendOtp);
router.post('/verifyOtp',verifyOtp)
router.post('/testOtpSend',testSend)
router.post('/testVerify',testVerify)
router.post('/testForFazil',(req,res)=>{
const {name}= req.body
  res.json({

    fazil:"ooomb myre.neeeeeti"+name
  })

})




export default router
