const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const { SENDINBLUE_API_KEY } = process.env;

sgMail.setApiKey(SENDINBLUE_API_KEY);

const sendEmail = async (data) => {
  const email = { ...data, from: "bogdan.lyamzin.d@gmail.com" };
  await sgMail.send(email);
  return true;
};

module.exports = sendEmail;
