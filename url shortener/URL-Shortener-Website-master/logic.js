let btn = document.getElementById("shorten");

btn.addEventListener('click', short);

async function short() {
  try {
    let longURL = document.getElementById("longurl").value;
    let shortURL = document.getElementById("shorturl");

    const response = await fetch(`https://ulvis.net/api.php?url=${encodeURIComponent(longURL)}&custom=${encodeURIComponent("shorturl")}&private=1`);
    
    if (!response.ok) {
      throw new Error(`Failed to shorten URL. Status: ${response.status}`);
    }

    const data = await response.json();

    if (data && data.result && data.result.short_link2) {
      shortURL.value = data.result.short_link2;
    } else {
      throw new Error("Invalid response format from the API");
    }
  } catch (error) {
    console.error("Error:", error);
  }
}



