const router = require("express").Router();
const axios = require("axios");
router.get("/songs", (req, res) => {
  console.log("INSIDE OF /songs ENPOINT: ", req.query.query);
  let token =
    "BQARODvbhXF1o8f5EeZ_uKA-5qOK1UN4kW5tbIhfADKi1wVHRe-IIIsFvEeDWb9Flg5KyJTxtoSfgpwfPqm9f4p1L49cSpCXUb4Rwgt_w326vE2PRH1GSp0JTXWi4MHXgBf1qe3gPrHMc9V9lYb4Vcu3wstcYWDQnua5iC97LS6-X2Ru2G4k8uME-gFr1DFNwYrrbfmzYd69TCzNwxx9Zm6AuFehOa2h4_br14b-Mlkt2IEvbIV3wBlmPmuPmhUm7-WCMvA";
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
      console.error(err);
      res.sendStatus(500);
    });
  // res.send([
  //   { title: "We Will Rock You" },
  //   { title: "Don't Stop Belivin'" },
  //   { title: "Under The Bridge" },
  //   { title: "Moonlight Sonata" }
  // ]);
});

router.get("/hello", (req, res) => {
  res.send({
    name: "World"
  });
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
