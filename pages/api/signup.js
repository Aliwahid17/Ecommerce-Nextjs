// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import User from "../../models/User"
import connectDb from "../../middleware/mongoose"
var CryptoJS = require("crypto-js");

const handler = async (req, res) => {

    if (req.method == 'POST') {
        const { name, email } = req.body
        let u = new User({ name, email, password: CryptoJS.AES.encrypt(req.body.password, 'secret key 123').toString() })
        await u.save()
        res.status(200).json({ success: "Success" })
    }

    else {
        res.status(400).json({ error: "This is not allowed" })
    }
}

export default connectDb(handler);
