const router = require("express").Router();
const axios = require("axios");

let token = "test";

router.get("/songs", (req, res) => {
  console.log("INSIDE OF /songs ENPOINT: ", req.query.query);
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
      console.log("SONGS RETURNED: ", success.data);
      res.send(success.data);
    })
    .catch(err => {
      console.error("FAILED TO FETCH SONGS");
      res.sendStatus(401);
    });
});

router.post("/token", (req, res) => {
  console.log("INSIDE TOKEN ROUTE:", req.body);
  token = req.body.token;
  res.send("token received");
});

module.exports = router;

// router.get(
//   '/spotifyAPI/search',
//   (req, res) => {
//     console.log('spotify search for tracks endpoint reached ************************************');
//     const token = req.session.passport.user.spotifyToken;
//
//   },
// );
