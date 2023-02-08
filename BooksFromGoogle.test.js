import { queryGoogleBookAPI, howManyBooks } from "./BooksFromGoogle";

test('Book Query Returns some text', async () => {
    const bookDesc = await queryGoogleBookAPI("Flowers for Algernon");
    console.log(bookDesc);
});

test('how ManyBooks', async () => {
    const numBooks = await howManyBooks("Flowers for Algernon")
    expect(numBooks).toBeLessThanOrEqual(10)
});

test('how ManyBooks', async () => {
    const numBooks = await howManyBooks("Flowers for Algernon")
    expect(numBooks).toBeLessThanOrEqual(10)
});