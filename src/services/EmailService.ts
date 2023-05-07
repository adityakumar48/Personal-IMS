import nodemailer from "nodemailer";
require("dotenv").config();

export const sendEmail = (email: string, otp: number, name: string): any => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.MYEMAIL,
        pass: process.env.MYEMAILPASSWORD,
      },
    });
    const mailOptions = {
      from: `Visinigiri Aditya <${process.env.MYEMAIL}>`,
      to: email,
      subject: "OTP Verification",
      text: `Hello ${name}, Your OTP is ${otp}`,
    };
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  } catch (err) {
    console.log(err);
  }
};
