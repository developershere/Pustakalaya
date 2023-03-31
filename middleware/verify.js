import Jwt from "jsonwebtoken";
export const verifyToken = (request, response, next) => {
    let token = request.headers.authorization;
    try {
        if (!token)
            throw new Error;
        Jwt.verify(token, 'dssfdgdfgfsds');
        next();
    }
    catch (err) {
        console.log(err);
        return response.status(401).json({ error: "Unauthorized request", status: false });
    }
}
