import User from "../../models/User";
// import Bill from "../../models/Bill";
import connectDb from "../../middleware/monooges";
var CryptoJS = require("crypto-js");
import jsonewebtoken from "jsonwebtoken";

const handler = async (req, res) => {
  if (req.method === "POST") {
    let token = req.body.token;
    console.log(token);
    const user = jsonewebtoken.verify(token, "ourkey");
    // let dbuser = await User.findOne({ email: user.email });
    let dbuser = await User.findOne({ _id: user.userid });

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
    } = dbuser;

    res.status(200).json({
      name,
      address,
      phone,
      email,
      pin,
      gstin,
      phone,
      pan,
      image,
      password,
      metamaskaddress,
    });
  } else {
    res.status(400).json({ success: false, error: "no user found" });
  }
};

export default connectDb(handler);
