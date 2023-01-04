const nodemailer = require("nodemailer");
const asyncHandler = require('express-async-handler')


async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();
  
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'flightcoordinator.yoke@gmail.com',
        pass: 'wnamljtnjzuulvva'
        //actual pwd is: Oneringtorulethemall
      }
    });
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: 'Flight Status', // sender address
      to: 'snehabhuyan4@gmail.com', // list of receivers
      subject: 'Flight Canceled', // Subject line
      text: 'Flight Canceled', // plain text body
      html: 'Flight Canceled', // html body
    });
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }

  const sentEmailStudentDeclined = () => {
    return async (req, res, next) => {
     

      // const studenEmail = Student.studentModel.findById(studentId).select(email);
     
    //   body = `Hello, Your flight on 17th January has been cancelled `
      
    //   try {
    //     main().catch(console.error);
        res.json("sent successfull");
    //   } catch (error) {
    //     res.status(500).json({ message: error.message });
    //   }
      
    }; 
  };  

  const testemail = asyncHandler( async (req,res) =>{
 

    try {
            main().catch(console.error);
            res.json("sent successfull2222");
          } catch (error) {
            res.status(500).json({ message: error.message });
          }
  
})

module.exports = {
    sentEmailStudentDeclined,
    testemail
  };