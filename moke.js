const bodyParser = require("body-parser");
module.exports = function request(app) {
    app.use(bodyParser.json());
    app.post("/user/login", (req, res) => {
        const { user, psd } = req.body;
        if (user == "a") {
            res.json({ code: 1, token: "123", user })
        } else if (user == "b") {
            res.json({ code: 1, token: "123", user })
        } else {
            res.json({ code: 2, token: "123", user })
        }
    });
    let index = 0;
    app.get("/user/info", (req, res) => {
        if (index%2==0) {
            index++
            res.json({code:1,role:["/about","/other"]})
        } else {
            index++
            res.json({code:1,role:["/about"]})
        }
    })
    app.get("*", (req, res, next) => {
        console.log("heihei ")
        next()
            //res.json({code:1,role:["/about"]})
    })
}