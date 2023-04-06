import Book from "../models/book.model.js";

export const addBook = async(req, res) => {
    const { name, description, author, price, categoryID, language, edition, photos, permission, publicationDate, userId, status, cityId, pinCode, color } = req.body;
    try {
        const book = await Book.create({
            name,
            description,
            price,
            author,
            categoryID,
            language,
            edition,
            photos,
            publicationDate,
            userId,
            status,
            cityId,
            pinCode,
            color,
            permission

        });
        res.status(201).json(book);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}