const nodemailer = require('nodemailer');

export default async (req, res) => {
  if (req.method === 'POST') {
    const { firstName, lastName, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      port: 465,
      host: 'smtp.gmail.com',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
      secure: true,
    });

    try {
      await transporter.verify();
      console.log('Server is ready to take our messages');

      const mailData = {
        from: {
          name: `${firstName} ${lastName}`,
          address: process.env.GMAIL_USER,
        },
        replyTo: email,
        to: process.env.RECIPIENT_EMAIL,
        subject: `Form message from ${firstName} ${lastName}`,
        text: message,
        html: `<p>${message}</p>`,
      };

      await transporter.sendMail(mailData);
      console.log('Message sent successfully');

      res.status(200).json({ status: 'OK' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};
