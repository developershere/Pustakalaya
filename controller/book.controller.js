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

export const viewBookById = async(req, res) => {
    const bookId = req.params.id;
    try {
        const book = await Book.findByPk(bookId);
        if (book) {
            res.status(200).json(book);
        } else {
            res.status(404).json({ message: 'Book not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


export const deleteBookById = async(req, res) => {
    const bookId = req.params.id;
    try {
        const deletedBook = await Book.destroy({
            where: {
                id: bookId
            }
        });
        if (deletedBook) {
            res.status(200).json({ message: 'Book deleted successfully' });
        } else {
            res.status(404).json({ message: 'Book not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}