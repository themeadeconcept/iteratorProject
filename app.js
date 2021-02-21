const data = [
  {
    name: "Joh Doe",
    age: 32,
    gender: "male",
    lookingfor: "female",
    location: "Boston MA",
    image: "https://randomuser.me/api/portraits/men/56.jpg",
  },
  {
    name: "Sam Bartlebie",
    age: 26,
    gender: "female",
    lookingfor: "male",
    location: "NYC NY",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "Geofrey Herbert",
    age: 42,
    gender: "male",
    lookingfor: "female",
    location: "Honolulu HI",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
  },
];

const profiles = profileIterator(data);

// Call First profile
nextProfile();

// Next Event
document.getElementById("next").addEventListener("click", nextProfile);

// Next Profile Display
function nextProfile() {
  const currentProfile = profiles.next().value;

  if (currentProfile !== undefined) {
    document.getElementById("profileDisplay").innerHTML = `
  <ul class="list-group">
    <li class="list-group-item">Name: ${currentProfile.name}</li>
    <li class="list-group-item">Age: ${currentProfile.age}</li>
    <li class="list-group-item">Location: ${currentProfile.location}</li>
    <li class="list-group-item">Preference: ${currentProfile.gender} is looking for ${currentProfile.lookingfor}</li>
  </ul>
  `;

    document.getElementById(
      "imageDisplay"
    ).innerHTML = `<img src="${currentProfile.image}">`;
  } else {
    // No more profiles - reload the page
    window.location.reload();
  }
}

//Profile Iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    },
  };
}
