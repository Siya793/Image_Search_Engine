const accessKey = "Zwet7pRWM4t_O5Tz33e4f7oT9eqWQC434dV-ilxqFuo";

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const searchMoreBtn = document.getElementById("search-more-btn");

let keyword = "";
let page = 1;

async function searchImages() {
    // Store the inputted keyword
    keyword = searchBox.value; 
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        const results = data.results;

        // Loop through each result
        results.map((result) => {
            const image = document.createElement("img");
            image.src = result.urls.small;  // Use result instead of results
            
            const imageLink = document.createElement("a");
            imageLink.href = result.links.html;  // Use result instead of results
            imageLink.target = "_blank";  // Open in new tab

            imageLink.appendChild(image);  // Append image to link
            searchResult.appendChild(imageLink);  // Append link to result container
        });
            showMoreBtn.style.display = "block";

    } catch (error) {
        console.error("Error fetching images:", error);
        // alert("Something went wrong. Please try again later.");
    }

}

// Event listener for form submission
searchForm.addEventListener("submit", (e) => {
    e.preventDefault();  // Prevent the default form submission behavior
    page = 1;  // Reset page number
    searchResult.innerHTML = "";  // Clear previous results
    searchImages();  // Call the searchImages function
});
