import twilio from "twilio";
import dotenv from "dotenv";

dotenv.config();

const accountSID = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const serviceId = process.env.SERVICE_ID;
// console.log(authToken)

const client = new twilio(accountSID, authToken);

// @desc   Accepting a number for sending OTP for
// @route  POST /users/otpSend
// @access Private
export const sendOtp = (req, res) => {
  try {
    const number = req.query.no;
    if (!number) return res.json({ warning: "Fill all" });
    client.verify
      .services(serviceId)
      .verifications.create({
        to: `+91${number}`,
        channel: "sms",
      })
      .then((data) => {
        res.status(200).json({
          phoneNumber: number,
          data,
        });
      });
  } catch (error) {
    console.log("Error message from Register user OTp ", error);
  }
};

// @desc   Verifying otp
// @route  POST /users/register
// @access Public

export const verifyOtp = (req, res) => {
  try {
    const { phoneNumber, otp } = req.body;

    if (!phoneNumber || !otp) return res.json({ warning: "Fill all" });

    client.verify
      .services(serviceId)
      .verificationChecks.create({
        to: `+91${phoneNumber}`,
        code: otp,
      })
      .then((data) => {
        // console.log(data);
        if (data.status === "approved") {
          res.status(200).json({
            verify: true,
            pending: false,
            message: "user verified",
            phoneNumber,
            data,
          });
        } else {
          res.status(400).json({
            verify: false,
            pending: true,
            message: "user not verified",
            phoneNumber,
            data,
          });
        }
      })
      .catch((err) => console.log(err));
  } catch (error) {
    console.log("Verify OTP error ", error);
  }
};

// @desc   Registering user
// @route  POST /users/userRegister
// @access Private

export const registerUser =((req,res)=>{

try {
     const {phoneNumber:phone,name,password}=req.body

     if(!phone||!name||!password)
     return res.status(400).json({
        field:"All",
        warning:"Fill all details"})

     if(phone.length<10||phone.length>10)
     return res.status(400).json({
         field:"phone Number",
         warning:"length exceeds"
        })

        if(password.length<6){
            return res.status(400).json({
                field:"password",
                warning:"too short"
               })
        }




} catch (err) {
console.log("This is the user Register error "+err)
}





})




//test

// export const testSend=(req,res)=>{

//     const{phoneNumber}=req.body
//     let date = new Date()
// if(!phoneNumber){
//     res.status(400).json({warn:"fill all"})
// }
// else res.json({
//     otpSend:true,
//     phoneNumber,
//     updatedAt:date,
//     message:"Otp send"
// })

// }

// export const testVerify = (req,res)=>{

//     const{phoneNumber,otp}=req.body
// if(!phoneNumber||!otp) res.status(400).json({warn:"Fill all"})

// res.json({

//     pending:false,
//     otpVerify:true,
//     message:"Otp veified",
//     phoneNumber

// })

// }
