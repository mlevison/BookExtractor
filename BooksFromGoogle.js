const GOOGLE_BOOKS_API_URL = "https://www.googleapis.com/books/v1/volumes";

export async function queryGoogleBookAPI(title) {
  let encodedTitle = encodeURIComponent(title);
  let finalURL = GOOGLE_BOOKS_API_URL + "?q=" + encodedTitle;
  console.log(finalURL);
  const response = await fetch(finalURL);
  const data = await response.json();
  return data;
}