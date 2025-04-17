const dotenv = require("dotenv");

dotenv.config();

// const oauth2Client = new google.auth.OAuth2(
//   CLIENT_ID,
//   CLIENT_SECRET,
//   REDIRECT_URI
// );
// oauth2Client.setCredentials({ access_token: ACCESS_TOKEN });
// const oauth2 = google.oauth2({auth: oauth2Client, version: 'v2'});
// const userinfo = await oauth2.userinfo.get();
// console.log(userinfo.data.email);

const verifyToken = async (tokenId) => {
  try {
    const ticket = await client.verifyIdToken({
      idToken: tokenId,
      audience: process.env.WEB_CLIENT_ID,
    });
    const payload = ticket.getPayload();
    // const email = payload.email;

    // console.log("User email:", email);
    console.log("userid :", payload);

    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
};

module.exports = { verifyToken };
