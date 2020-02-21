let express = require("express")
let fs = require("fs")
let app =express()
let path = require("path")
function resolve(url) {
    return path.join(__dirname,url)
}
const bodyParser = require("body-parser");
app.listen(3002, () => {
    console.log("start server 3002")
})
app.use(bodyParser.json()).use(express.static('./public'))
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.post("/data/user/login", (req, res) => {
    res.json({
      code: 1,
      token: "asdf"
    });
});

app.get("/data/user/info", (req, res) => {
  res.json({
    code: 1,
    role: ["/about","/other"]
  });
});

app.get("*", (req, res) => {
    fs.readFile(resolve("./public/index.html"), 'utf-8', (err, content) => {
        if (err) {
          console.log('We cannot open "index.htm" file.')
        }
        res.writeHead(200, {
          'Content-Type': 'text/html; charset=utf-8'
        })
        res.end(content)
      })
  });