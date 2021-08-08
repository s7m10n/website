const userAccordion = document.getElementById("userData");
const userCollection = db
  .collection("user-data")
  .get()
  .then((snap) => {
    snap.forEach((doc) => {
      const userData = doc.data();
      const username = userData["username"];
      const email = userData["email"];
      const csize = userData["csize"];
      const country = userData["country"];
      const cname = userData["cname"];
      const clevel = userData["clevel"];
      const bsector = userData["bsector"];
      console.log(username, csize, clevel, bsector, country, cname);

      // accordion item
      var userAccordionItem = document.createElement("div");
      userAccordionItem.className = "accordion-item";
      userAccordionItem.setAttribute("id", "userData");

      userAccordionItem.innerHTML += `<h2 class="accordion-header" id="${username}">
        <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse${username}"
            aria-expanded="false"
            aria-controls="collapse${username}"
        >
            ${cname}
        </button>
    </h2>
    <div
        id="collapse${username}"
        class="accordion-collapse collapse show"
        aria-labelledby="${username}"
        data-bs-parent="#userData"
    >
        <div class="accordion-body">
            Username: ${username} <br>
            Email: ${email} <br>
            Company Name: ${cname} <br>
            Company Size: ${csize} <br>
            Company Level: ${clevel} <br>
            Business Sector: ${bsector} <br>
            Country: ${country}
        </div>
    </div>`;
      userAccordion.appendChild(userAccordionItem);
      console.log(userAccordionItem);
    });
  });
