import {NextApiRequest, NextApiResponse} from 'next';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER, // Your Gmail address
    pass: process.env.GMAIL_PASS, // Your Gmail password or App password
  },
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const {name, email, message} = req.body;

    const mailOptions = {
      from: email,
      to: process.env.RECIPIENT_EMAIL, // Your recipient email address
      subject: `Contact form submission from ${name}`,
      text: message,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({success: true});
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({error: 'Failed to send email'});
    }
  } else {
    res.status(405).json({error: 'Method not allowed'});
  }
};
