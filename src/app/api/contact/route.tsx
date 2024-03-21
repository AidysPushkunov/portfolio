import { NextResponse } from "next/server";
const nodemailer = require("nodemailer");


export async function POST(request: any) {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  const { SMPT_EMAIL, SMPT_PASSWORD } = process.env;


  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMPT_EMAIL,
      pass: SMPT_PASSWORD,
    },
  });

  try {
    const mail = await transporter.sendMail({
      from: email,
      to: SMPT_EMAIL,
      replyTo: email,
      subject: `Website activity from ${email}`,
      html: `
        <p>Name: ${name} </p>
        <p>Email: ${email} </p>
        <p>Message: ${message} </p>
        `,
    });

    console.log(mail);

    return NextResponse.json({ message: "Success: email was sent" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
