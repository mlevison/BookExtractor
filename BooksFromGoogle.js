const GOOGLE_BOOKS_API_URL = "https://www.googleapis.com/books/v1/volumes";
const GOOGLE_BOOKS_TITLE_TERM = "intitle:"

export async function queryGoogleBookAPI(title) {
  let encodedTitle = encodeURIComponent(GOOGLE_BOOKS_TITLE_TERM + title);
  let finalURL = GOOGLE_BOOKS_API_URL + "?q=" + encodedTitle + "&maxResults=10";
  console.log(finalURL);
  const response = await fetch(finalURL);
  const data = await response.json();
  return data;
}