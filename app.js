const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const cron = require('node-cron')
const PORT = 5000;


const sendEmail = async (req,res) => {
    try {

        const transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: 'your mail',
                pass: 'app-password'
            }
        })

        const option = {
            from: 'your mail',
            to: 'receivers mail',
            subject: "Subject",
            text: ' text'
        }

        transporter.sendMail(option, function (err, info) {
            if (err) { console.log(err) }
            else { console.log("mail has been sent", info.response) }
        })


    } catch (error) {
        res.status(400).send({ status: false, message: error.massage })
    }
}

const dateToCron = (date) => {
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const days = date.getDate();
    const months = date.getMonth() + 1;
    const dayOfWeek = date.getDay();

    return `${minutes} ${hours} ${days} ${months} ${dayOfWeek}`;
};

const dateText = '2023-04-01 14:48:00';
const date = new Date(dateText);

const newCron = dateToCron(date);
console.log(newCron); //3

// const task=()=>{
// console.log('cron job!');
// }

cron.schedule(newCron,sendEmail)

// app.get('/',sendEmail)
//-----------------------------------forgetPassword--------------------
// const forgetPassword = async (req, res) => {
//     try {
//         //-----------generate otp-----------
//         let nums = "1234567890"
//         let otp = ""

//         for (let i = 0; i < 6; i++) {
//             otp += nums[Math.floor(Math.random() * 10)]
//         }

//         //----------------------------
//         let email = req.body.email;
//         let userData = await userModel.findOne({ email: email })
//         if (userData) {

//             let updateUser = await userModel.updateOne({ email: email }, { $set: { otp: otp } })

//             sendResetPasswordMail(userData.name, userData.email, otp)

//             res.status(200).send({ status: true, message: "Please check your mail" })
//         } else {
//             { res.status(400).send({ status: false, message: "Email not Register" }) }
//         }

//     } catch (error) {
//         res.send({ status: false, message: error.message })
//     }
// }

// async function changePassword(req, res) {
//     let otp = req.body.otp
//     console.log(otp)
//     let userData = await userModel.findOne({ otp: otp })

//     if (userData) {
//         let newPassword = req.body.password;
//         let newData = await userModel.findByIdAndUpdate({ _id: userData._id }, { $set: { password: newPassword, otp: "" } }, { new: true })
//         let updatedUser = {
//             name: newData.name,
//             email: newData.email,
//             phone: newData.phone,
//             address: newData.address
//         }
//         res.status(200).send({ status: true, message: "Password reset successful", data: updatedUser })
//     }

//     else {
//         res.status(200).send({ status: true, message: "OTP invalid" })
//     }
// }



app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
})