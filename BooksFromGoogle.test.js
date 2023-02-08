import { queryGoogleBookAPI, howManyBooks } from "./BooksFromGoogle";

test('Book Query Returns some text', async () => {
    const bookDesc = await queryGoogleBookAPI("Flowers for Algernon");
    console.log(bookDesc);
});

test('how ManyBooks', async () => {
    const numBooks = await howManyBooks("Flowers for Algernon")
    expect(numBooks).toBeLessThanOrEqual(10)
});

test('first book details', async () => {
    const bookDesc = await queryGoogleBookAPI("Flowers for Algernon");
    expect(bookDesc.items[0].volumeInfo.title).toEqual("Flowers for Algernon");
    expect(bookDesc.items[0].volumeInfo.authors[0]).toEqual("Daniel Keyes");
    expect(bookDesc.items[0].volumeInfo.categories[0]).toEqual("Fiction");
});