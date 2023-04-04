export const sendEmail = (request, response) => {
    var transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      service: 'gmail',
      port: 465,
      secure: true,
      auth: {
        user: 'poojarajput9516@gmail.com',
        pass: 'gqchoysqcvicybxf'
      }
    });
  
    var mailOptions = {
      from: 'poojarajput9516@gmail.com',
      to: ' techdevelopres2308@gmail.com',
      subject: 'login successful',
      text: 'wlcome astha'
    };
  
    transporter.sendMail(mailOptions, function (error, info){
      if (error) {
        console.log(error);
      } else {
        response.send("email sent succesfully");
      }
    });
  }