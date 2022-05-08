import nodemailer from "nodemailer";

import { MailAdapter, SendMailData } from "../mail-adapter";

var transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "98a24acf28701c",
    pass: "8e41722bdfc57d",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Gabriel Belther <belthergabriel@gmail.com>",
      subject,
      html: body,
    });
  }
}
