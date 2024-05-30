const DarkModeElement = document.getElementById("darkModeToggle");
const body = document.body;



DarkModeElement.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  console.log("ok")
});

document.addEventListener("DOMContentLoaded", () => {
  const flagsContainer = document.querySelector(
    ".container.mx-auto.flex.flex-wrap.justify-center"
  );

  fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((country) => {
        const flagUrl = country.flags.svg;
        const countryName = country.name.common;
        const population = country.population.toLocaleString();
        const region = country.region;
        const capital = country.capital ? country.capital[0] : "N/A";

        const card = document.createElement("div");
        card.className =
          "card w-64 md:w-56 bg-white rounded-md overflow-hidden shadow-lg";

        const img = document.createElement("img");
        img.src = flagUrl;
        img.alt = `${countryName} flag`;
        img.className = "w-full h-40 object-cover";

        const cardBody = document.createElement("div");
        cardBody.className = "px-6 py-4";

        const title = document.createElement("div");
        title.className = "font-bold text-xl mb-2";
        title.textContent = countryName;

        const details = document.createElement("div");
        details.className = "flex flex-col";

        const populationDiv = document.createElement("div");
        populationDiv.innerHTML = `<span>Population: </span><span>${population}</span>`;

        const regionDiv = document.createElement("div");
        regionDiv.innerHTML = `<span>Region: </span><span>${region}</span>`;

        const capitalDiv = document.createElement("div");
        capitalDiv.innerHTML = `<span>Capital: </span><span>${capital}</span>`;

        details.appendChild(populationDiv);
        details.appendChild(regionDiv);
        details.appendChild(capitalDiv);

        cardBody.appendChild(title);
        cardBody.appendChild(details);
        card.appendChild(img);
        card.appendChild(cardBody);
        flagsContainer.appendChild(card);
      });
    })
    .catch((error) => {
      console.error("Error fetching country data:", error);
    });
});




console.log(DarkModeElement);