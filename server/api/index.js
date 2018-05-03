const router = require("express").Router();

router.get("/songs", (req, res) => {
  console.log("INSIDE OF /songs ENPOINT: ", req.query.query);
  res.send([
    { title: "We Will Rock You" },
    { title: "Don't Stop Belivin'" },
    { title: "Under The Bridge" },
    { title: "Moonlight Sonata" }
  ]);
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
//     axios({
//       method: 'GET',
//       url: `https://api.spotify.com/v1/search?q=${req.query.track}&type=track&market=US&limit=15&offset=0`,
//       headers: {
//         Authorization: `Bearer ${token}`,
//         'Content-Type': 'application/json',
//       },
//     })
//       .then((success) => {
//         res.send(success.data);

//       })
//       .catch((err) => {
//         console.error(err);
//         res.sendStatus(500);
//       });
//   },
// );
