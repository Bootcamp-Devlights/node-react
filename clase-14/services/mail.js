import nodemailer from "nodemailer";
import config from "../config.js";

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // true for 465, false for other ports,
  auth: {
    user: config.EMAIL_USERNAME, // generated ethereal user
    pass: config.EMAIL_PASSWORD, // generated ethereal password
  },
});

export async function sendMail(userEmail, userName) {
  let info = await transporter.sendMail({
    from: '"Agustin R." <agustin.r@example.com>', // sender address
    to: userEmail, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: `<b>Hello ${userName}</b>`, // html body
  });

  console.log("Message sent: %s", info.messageId);
}