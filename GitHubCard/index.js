const followersArray = [
  "Kat2bk",
  "alborja07",
  "Seth16",
  "MaxiCB",
  "gideonogbuagu"
];

followersArray.forEach(function(item) {
  axios
    .get(`https://api.github.com/users/${item}`)
    .then(response => {
      displayList.appendChild(createFollower(response));
    })
    .catch(error => {
      console.log("error from the axios call looping over users", error);
    });
});

function createFollower(obj) {
  const cardDisplay = document.createElement("div");
  const imgUrl = document.createElement("img");
  const cardInfo = document.createElement("div");
  const userTitle = document.createElement("h3");
  const gitName = document.createElement("p");
  const gitLocation = document.createElement("p");
  const profileUrl = document.createElement("p");
  const gitFollowers = document.createElement("p");
  const gitFollowing = document.createElement("p");
  const userBio = document.createElement("p");

  // appending

  cardDisplay.appendChild(imgUrl);
  cardDisplay.appendChild(cardInfo);
  cardInfo.appendChild(userTitle);
  cardInfo.appendChild(gitName);
  cardInfo.appendChild(gitLocation);
  cardInfo.appendChild(profileUrl);
  cardInfo.appendChild(gitFollowers);
  cardInfo.appendChild(gitFollowing);
  cardInfo.appendChild(userBio);

  // adding classes

  cardDisplay.classList.add("card");
  imgUrl.classList.add("img");
  userTitle.classList.add("name");
  gitName.classList.add("username");
  gitLocation.classList.add("p");
  profileUrl.classList.add("p");
  gitFollowers.classList.add("p");
  gitFollowing.classList.add("p");
  userBio.classList.add("p");

  // set data to the elements, setting them as objects to be used in the array

  imgUrl.setAttribute("src", obj.data.avatar_url);

  userTitle.textContent = obj.data.name;
  gitName.textContent = obj.data.login;
  gitLocation.textContent = obj.data.location;
  profileUrl.textContent = obj.data.url;
  gitFollowers.textContent = "Followers: " + obj.data.followers;
  gitFollowing.textContent = "Following: " + obj.data.following;
  userBio.textContent = "Bio: " + obj.data.bio;

  return cardDisplay;
}

// made a variable and set it to the parent of the cardDisplay

const displayList = document.querySelector(".cards");

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
