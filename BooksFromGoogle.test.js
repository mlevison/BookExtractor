import { queryGoogleBookAPI } from "./BooksFromGoogle";

test('Query Returns some text', async () => {
    const bookDesc = await queryGoogleBookAPI("Flowers for Algernon");
    console.log(bookDesc);
});