const nodemailer = require("nodemailer");
const sendGridTransport = require("nodemailer-sendgrid-transport");

//transport
const transporter = nodemailer.createTransport(
  sendGridTransport({
    auth: {
      api_key: process.env.API_SENDGRID,
    },
  })
);

const sendEmailController = (req, res) => {
  try {
    const { name, email, msg } = req.body;

    //validation
    if (!name || !email || !msg) {
      return res.status(500).send({
        success: false,
        message: "Please Provide All Fields",
      });
    }
    //email matter
    transporter.sendMail({
      to: "bhavsarkaran37@gmail.com",
      from: "bhavsarkaran37@gmail.com",
      subject: "Regarding Mern Portfolio App",
      html: `
        <h5>Detail Information</h5>
        <ul>
          <li><p>Name : ${name}</p></li>
          <li><p>Email : ${email}</p></li>
          <li><p>Message : ${msg}</p></li>
        </ul>
      `,
    });

    return res.status(200).send({
      success: true,
      message: "Your Message Send Successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Send Email API Error",
      error,
    });
  }
};

module.exports = { sendEmailController };

// const { request } = require("express");
// const nodemailer = require("nodemailer");
// const sendGridTransport = require("nodemailer-sendgrid-transport");

// // Transport function  --> send grid account ko connect kar sakte hai

// const transporter = nodemailer.createTransport(
//   sendGridTransport({
//     auth: {
//       api_key: process.env.API_SENDGRID,
//     },
//   })
// );
// const sendEmailController = (req, res) => {
//   try {
//     const { name, email, msg } = request.body;

//     // Validation
//     if (!name || !email || !msg) {
//       return res.status(500).send({
//         success: false,
//         message: "Please Provide All Fields",
//       });
//     }

//     // email matter
//     transporter.sendMail({
//       to: "bhavsarkaran37@gmail.com",
//       from: "bhavsarkaran37@gmail.com",
//       subject: "Regarding Mern Portfolio Website",
//       html: `s
//         <h5>Detail Information</h5>
//         <ul>
//           <li><p>Name: ${name}</p></li>
//           <li><p>Email: ${email}</p></li>
//           <li><p>Message: ${msg}</p></li>
//         </ul> `,
//     });
//     return res.status(200).send({
//       success: true,
//       message: "Your Message Send Successfully",
//     });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).send({
//       success: false,
//       message: "Send Email API Error",
//       error,
//     });
//   }
// };

// module.exports = { sendEmailController };
