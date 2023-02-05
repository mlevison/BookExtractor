import { queryGoogleBookAPI } from "./BooksFromGoogle";

test('Query Returns some text', () => {
    let bookDesc = queryGoogleBookAPI("Flowers for Algernon");
    console.log(bookDesc);
});