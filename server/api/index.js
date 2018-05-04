const router = require("express").Router();
const axios = require("axios");

let token = "test";

router.get("/songs", (req, res) => {
  axios({
    method: "GET",
    url:
      `https://api.spotify.com/v1` +
      `/search?q=${req.query.query}&type=track&market=US&limit=15&offset=0`,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  })
    .then(success => {
      res.send(success.data);
    })
    .catch(err => {
      res.sendStatus(401);
    });
});

router.post("/token", (req, res) => {
  token = req.body.token;
  res.send("token received");
});

module.exports = router;
