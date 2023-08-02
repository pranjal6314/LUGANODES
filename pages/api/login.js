import User from "../../models/User";
import connectDb from "../../middleware/monooges";
var CryptoJS = require("crypto-js");
var jwt = require("jsonwebtoken");

const handler = async (req, res) => {
  console.log("req.body : ", req.body);
  if (req.method === "POST") {
    if (req.body.metamask) {
      let user = await User.findOne({ metamaskaddress: req.body.metamask });

      if (user) {
        var token = jwt.sign({ userid: user._id }, "ourkey");
        return res.status(200).json({ token: token, success: true });
      } else {
        let newUser = await User.create({ metamaskaddress: req.body.metamask });
        var token = jwt.sign({ userid: newUser._id }, "ourkey");
        console.log("token : ", token);
        return res.status(200).json({ token: token, success: true });
      }
    }

    let user = await User.findOne({ email: req.body.email });

    if (user) {
      const bytes = CryptoJS.AES.decrypt(
        user.password,
        process.env.AUTH_SECRET
      );
      var decryptedData = bytes.toString(CryptoJS.enc.Utf8);
    } else {
      res.status(200).json({ success: false, error: "no user found" });
    }

    if (user) {
      if (
        req.body.email === user.email &&
        decryptedData === req.body.password
      ) {
        // var token = jwt.sign({ email: user.email, name: user.name }, "ourkey");
        var token = jwt.sign({ userid: user._id }, "ourkey");
        // , {
        //   expiresIn: "1h",
        // }
        res
          .status(200)
          .json({ token: token, success: true, email: user.email });
      } else {
        res.status(200).json({ success: false, error: "wrong credentials " });
      }
    }
  } else {
    res.status(200).json({ success: false, error: "no user found" });
  }
};

export default connectDb(handler);
