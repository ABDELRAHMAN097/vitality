// import { NextResponse } from 'next/server';
// import nodemailer from 'nodemailer';

// export async function POST(request: Request) {
//   try {
//     const { name, email, message } = await request.json();

//     // إنشاء ناقل البريد
//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASSWORD,
//       },
//     });

//     // خيارات البريد الإلكتروني
//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: 'bodymagdy097@gmail.com',
//       subject: `New Message from ${name}`,
//       text: `
//         Name: ${name}
//         Email: ${email}
//         Message: ${message}
//       `,
//       html: `
//         <h3>New Contact Form Submission</h3>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Message:</strong> ${message}</p>
//       `,
//     };

//     // إرسال البريد الإلكتروني
//     await transporter.sendMail(mailOptions);

//     return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json(
//       { message: 'Failed to send email', error },
//       { status: 500 }
//     );
//   }
// }