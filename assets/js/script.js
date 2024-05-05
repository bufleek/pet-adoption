const sections = document.querySelectorAll(".scroll-animation");
const petImage = document.getElementById("pet-image");
let lastScrollY = window.scrollY;

function checkScroll() {
  const triggerBottom = window.innerHeight * 0.8;

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add("show");
    } else {
      section.classList.remove("show");
    }
  });

  const currentScrollY = window.scrollY;
  const scrollDirection = currentScrollY > lastScrollY ? "down" : "up";

  if (window.innerWidth >= 768) {
    const petHeight = petImage.offsetHeight;
    const viewportHeight = window.innerHeight;
    const driftRatio = petHeight / viewportHeight;

    if (scrollDirection === "down") {
      petImage.style.transform = `translateX(${50 * driftRatio}%)`;
    } else {
      petImage.style.transform = "translateX(0)";
    }
  }

  lastScrollY = currentScrollY;
}

window.addEventListener("scroll", checkScroll);

checkScroll();

const pets = [
  {
    type: "dog",
    pet_size: "small",
    name: "Whiskers",
    age: "2 years",
    breed: "Labrador Retriever",
    gender: "Male",
    image:
      "https://media.istockphoto.com/id/1460537153/photo/a-golden-retriever-running-with-her-ball-in-yard-by-a-tree-5-year-old.webp?s=2048x2048&w=is&k=20&c=PBb3h8Tk17eWnx7MBF75IwId9SxIqrf9Z8l8d_9jJIU=",
  },
  {
    type: "dog",
    pet_size: "medium",
    name: "Luna",
    age: "3 years",
    breed: "Maine Coon",
    gender: "Female",
    image:
      "https://images.unsplash.com/photo-1583511655826-05700d52f4d9?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    type: "dog",
    pet_size: "large",
    name: "Buddy",
    age: "4 years",
    breed: "Golden Retriever",
    gender: "Male",
    image:
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    type: "cat",
    pet_size: "small",
    name: "Bella",
    age: "2 years",
    breed: "French Bulldog",
    gender: "Female",
    image:
      "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    type: "dog",
    pet_size: "medium",
    name: "Max",
    age: "3 years",
    breed: "Siberian Husky",
    gender: "Male",
    image:
      "https://images.unsplash.com/photo-1548767797-d8c844163c4c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    type: "cat",
    pet_size: "small",
    name: "Peanut",
    age: "1 year",
    breed: "Shih Tzu",
    gender: "Female",
    image:
      "https://media.istockphoto.com/id/1634311257/photo/golden-retriever-happily-running-in-autumn-park.webp?s=2048x2048&w=is&k=20&c=3A2R5oWJZimnoqK6d0ut9D0XXeGHzFIjli-QECbKyVs=",
  },
  {
    type: "cat",
    pet_size: "small",
    name: "Daisy",
    age: "2 years",
    breed: "Beagle",
    gender: "Female",
    image:
      "https://images.unsplash.com/photo-1455103493930-a116f655b6c5?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    type: "cat",
    pet_size: "small",
    name: "Oliver",
    age: "2 years",
    breed: "Poodle",
    gender: "Male",
    image:
      "https://images.unsplash.com/photo-1602580404312-82db1079069d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    type: "cat",
    pet_size: "small",
    name: "Coco",
    age: "2 years",
    breed: "Siamese",
    gender: "Female",
    image:
      "https://images.unsplash.com/photo-1516470544373-df3edeb89d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
  },
  {
    type: "cat",
    pet_size: "large",
    name: "Rocky",
    age: "4 years",
    breed: "German Shepherd",
    gender: "Male",
    image:
      "https://plus.unsplash.com/premium_photo-1666612335823-31c2d1ee35b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8",
  },
  {
    type: "dog",
    pet_size: "small",
    name: "Ruby",
    age: "2 years",
    breed: "Dachshund",
    gender: "Female",
    image:
      "https://images.unsplash.com/photo-1551887373-3c5bd224f6e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8",
  },
  {
    type: "dog",
    pet_size: "medium",
    name: "Gizmo",
    age: "3 years",
    breed: "Pomeranian",
    gender: "Male",
    image:
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8",
  },
];

const petSelect = document.getElementById("pet-select");
const option = document.createElement("option");
option.textContent = "";
option.value = "";
petSelect.appendChild(option);

pets.forEach((pet) => {
  const option = document.createElement("option");
  option.textContent = pet.name;
  option.value = pet.name;
  petSelect.appendChild(option);
});

const petsContainer = document.getElementById("pets");
pets.forEach((pet) => {
  const petCard = document.createElement("div");
  petCard.classList.add("pet-card");

  const petImage = document.createElement("img");
  petImage.src = pet.image;
  petImage.alt = "Pet Image";

  const petInfo = document.createElement("div");
  petInfo.classList.add("pet-info");

  const name = document.createElement("p");
  name.innerHTML = `<strong>Name:</strong> ${pet.name}`;

  const age = document.createElement("p");
  age.innerHTML = `<strong>Age:</strong> ${pet.age}`;

  const breed = document.createElement("p");
  breed.innerHTML = `<strong>Breed:</strong> ${pet.breed}`;

  const gender = document.createElement("p");
  gender.innerHTML = `<strong>Gender:</strong> ${pet.gender}`;

  petInfo.appendChild(name);
  petInfo.appendChild(age);
  petInfo.appendChild(breed);
  petInfo.appendChild(gender);

  petCard.appendChild(petImage);
  petCard.appendChild(petInfo);

  petCard.addEventListener("click", () => {
    const currentURL = window.location.href;
    window.location.href =
      currentURL.replaceAll("#contact-form", "") + "#contact-form";

    document.getElementById("pet-select").value = pet.name;
  });
  petsContainer.appendChild(petCard);
});

const monthlyCostElement = document.getElementById("monthly-cost");
const yearlyCostElement = document.getElementById("yearly-cost");
const searchInput = document.getElementById("search-input");
const selectedPetsSelect = document.getElementById("pet-selections");
const selectedPets = [];

searchInput.addEventListener("input", filterSelections);

function filterSelections() {
  const searchValue = searchInput.value.toLowerCase();
  let matchingPets = pets.filter(
    (pet) =>
      pet.name.toLowerCase().includes(searchValue.toLowerCase()) &&
      !selectedPets.some((selectedPet) => selectedPet.name === pet.name)
  );

  if (searchValue.length == 0) {
    selectedPetsSelect.classList.remove("show");
    selectedPetsSelect.classList.add("hide");
    return;
  }

  if (matchingPets.length == 0) {
    selectedPetsSelect.innerHTML = "";
    const option = document.createElement("div");
    option.textContent = "No results";
    selectedPetsSelect.appendChild(option);
    return;
  }

  selectedPetsSelect.innerHTML = "";

  selectedPetsSelect.classList.remove("hide");
  selectedPetsSelect.classList.add("show");

  matchingPets.forEach((pet) => {
    const option = document.createElement("div");
    option.textContent = pet.name;
    option.addEventListener("click", () => {
      selectedPets.push(pet);
      calculateCost();
    });
    selectedPetsSelect.appendChild(option);
  });
}

function calculateCost() {
  selectedPetsSelect.classList.remove("show");
  selectedPetsSelect.classList.add("hide");

  searchInput.value = "";

  let monthlyCost = 0;
  let yearlyCost = 0;

  selectedPets.forEach((pet) => {
    if (pet) {
      let costFactor = 50;
      if (pet.type === "dog") {
        costFactor += 20;
      }
      if (pet.pet_size === "medium") {
        costFactor += 10;
      } else if (pet.pet_size === "large") {
        costFactor += 20;
      }
      monthlyCost += costFactor;
    }
  });

  yearlyCost = monthlyCost * 12;

  monthlyCostElement.textContent = `$${monthlyCost}`;
  yearlyCostElement.textContent = `$${yearlyCost}`;

  filterSelections();

  let selectedPetsDiv = document.getElementById("selected-pets");
  selectedPetsDiv.innerHTML = "";
  selectedPets.forEach((selectedPet) => {
    const chip = document.createElement("div");
    chip.classList.add("chip");
    chip.textContent = selectedPet.name;
    chip.addEventListener("click", () => {
      selectedPets.splice(selectedPets.indexOf(selectedPet), 1);
      calculateCost();
    });
    selectedPetsDiv.appendChild(chip);
  });
}

document
  .getElementById("inquiry-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;
    const pet = document.getElementById("pet-select").value;

    const emailBody = `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Pet: ${pet}
        Message: ${message}
    `;

    console.log("Email sent with the following content:");
    console.log(emailBody);

    const emailData = {
      sender: {
        name: "Inquiry Form",
        email: email,
      },
      to: [
        {
          email: process.env.EMAIL_TO,
          name: process.env.TO_NAME,
        },
      ],
      subject: "Pet Adoption Inquiry",
      htmlContent: `<html><body>${emailBody.replace(
        /\n/g,
        "<br>"
      )}</body></html>`,
    };

    fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": process.env.BREVO_API_KEY,
        "content-type": "application/json",
      },
      body: JSON.stringify(emailData),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Thank you for your inquiry! We will get back to you soon.");
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("message").value = "";
      })
      .catch((error) => {
        console.warn("Failed to send email. \n" + error.toString());
      });
  });
