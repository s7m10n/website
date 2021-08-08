const userCollection = db
  .collection("user-data")
  .get()
  .then((snap) => {
    snap.forEach((doc) => {
      const userData = doc.data();
      const username = userData["username"];
      const csize = userData["csize"];
      const country = userData["country"];
      const cname = userData["cname"];
      const clevel = userData["clevel"];
      const bsector = userData["bsector"];
      console.log(username, csize, clevel, bsector, country, cname);
    });
  });
