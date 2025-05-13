const User = require("../models/User");
const dotenv = require("dotenv");
dotenv.config();
const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(CLIENT_ID);

const verifyToken = async (tokenId) => {
  try {
    const ticket = await client.verifyIdToken({
      idToken: tokenId,
      audience: CLIENT_ID,
    });
    const payload = ticket.getPayload();
    const email = payload.email;
    const name = payload.name;
    const user = new User({ email, name });

    return user;
  } catch (e) {
    console.error(e);
    return false;
  }
};

module.exports = { verifyToken };
