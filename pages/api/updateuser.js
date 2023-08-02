import User from "../../models/User";
// import Bill from "../../models/Bill";
import connectDb from "../../middleware/monooges";
var CryptoJS = require("crypto-js");
import jsonewebtoken from "jsonwebtoken";

const handler = async (req, res) => {
  if (req.method === "POST") {
    let token = req.body.token;

    // console.log("token", token);
    // const user = jsonewebtoken.verify(token, "ourkey");
    const user = jsonewebtoken.verify(token, "ourkey");
    if (req.body.metamask) {
      let dbuser = await User.findOneAndUpdate(
        { metamaskaddress: req.body.metamask },

        {
          name: req.body.name,
          address: req.body.address,
          pin: req.body.pin,
          phone: req.body.phone,
          pan: req.body.pan,
          gstin: req.body.gstin,
          image: req.body.image,
          email: req.body.email,
          password: CryptoJS.AES.encrypt(
            req.body.password,
            process.env.AUTH_SECRET
          ).toString(),
        }
      );
    } else {
      let dbuser = await User.findOneAndUpdate(
        // { email: user.email },
        { _id: user.userid },

        {
          name: req.body.name,
          metamaskaddress: req.body.metamaskaddress,
          address: req.body.address,
          pin: req.body.pin,
          phone: req.body.phone,
          pan: req.body.pan,
          gstin: req.body.gstin,
          image: req.body.image,
        }
      );
    }

    const {
      name,
      address,
      phone,
      email,
      pin,
      gstin,
      pan,
      image,
      metamaskaddress,
      password,
    } = user;

    res.status(200).json({
      name,
      metamaskaddress,
      address,
      phone,
      email,
      pin,
      gstin,
      pan,
      image,
      password,
      success: true,
    });
  } else {
    res.status(400).json({ success: false, error: "no user found" });
  }
};

export default connectDb(handler);
