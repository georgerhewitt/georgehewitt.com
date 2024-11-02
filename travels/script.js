document.addEventListener("DOMContentLoaded", () => {
  fetch("sample.json")
    .then(response => response.json())
    .then(data => {
      document.getElementById("mainTitle").textContent = data.mainTitle;

      const imageContainer = document.getElementById("imageContainer");
      data.images.forEach(image => {
        const imageCard = document.createElement("div");
        imageCard.classList.add("image-card");

        const imgElement = document.createElement("img");
        imgElement.src = image.src;
        imgElement.alt = image.title;

        const titleElement = document.createElement("h3");
        titleElement.classList.add("image-title");
        titleElement.textContent = image.title;

        const summaryElement = document.createElement("p");
        summaryElement.classList.add("image-summary");
        summaryElement.textContent = image.summary;

        imageCard.appendChild(imgElement);
        imageCard.appendChild(titleElement);
        imageCard.appendChild(summaryElement);
        imageContainer.appendChild(imageCard);
      });
    })
    .catch(error => console.error("Error fetching JSON data:", error));
});
