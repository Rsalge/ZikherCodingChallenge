const router = require("express").Router();
const axios = require("axios");
router.get("/songs", (req, res) => {
  console.log("INSIDE OF /songs ENPOINT: ", req.query.query);
  let token =
    "BQCQAQHZmPGRPempVBzmUJiNoeiKGm-WdfnB9I5DGOVXeQDmxXydWGV8O8o516bvKdIXuNoUl7jziZ_qIBe0rw0DzWlONglZ5m37pZIS4VMs_HzKcwMBuXPTBqCgXoiRfVc0t4VR5geAQUUr63lO5iCMcpH5aCEgvV1pI71PfxVHqGU1MuCHlNyKWQT6-j4QjKWtVEy4hLn6SEWY-4-NSJGAveToDgAc3ctfY0-jwZSOFDzD2716wvtn9UCuVpTjZmZZt3I";
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
