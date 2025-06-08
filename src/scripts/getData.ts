async function getData<T>(type: string = "shop", name: string = undefined): Promise<T> {
  
  let url: string = "https://fortnite-api.com/v2/shop";

  if(type === "cosmetic" && name != undefined) {
    url = `https://fortnite-api.com/v2/cosmetics/br/search?name=${name}&matchMethod=contains`;
  }

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: T = await response.json();
    return data;
  }
  catch (error) {
    console.error("Fetch error:", error);
  }
}

export default getData;
