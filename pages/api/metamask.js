import Metamask from "../../models/metamask";
import connectDb from "../../middleware/monooges";
var CryptoJS = require("crypto-js");
const handler = async (req, res) => {
  if (req.method === "POST") {
    const { address } = req.body;
    let add = await Metamask.findOne({ address: address });
    if (add) {
      res.status(200).json({ success: true });
    }
    let u = new Metamask({
      address: address,
    });

    await u.save();
    res.status(200).json({ success: true });
  } else {
    res.status(400).json({ message: "We only support POST" });
  }
};

export default connectDb(handler);
