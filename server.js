import express from 'express';
import bodyParser from 'body-parser';
import AdminRoutes from "./routes/admin.route.js";
import BookRouters from "./routes/book.route.js";
import CategoryRouters from "./routes/category.route.js";
import HistoryRouters from "./routes/history.route.js";
import WishlistRouters from "./routes/wishlist.route.js";
const server = express();
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use("/admin", AdminRoutes);
server.use("/user", UserRoutes);
server.use("/book", BookRouters);
server.use("/category", CategoryRouters);
server.use("/history", HistoryRouters);
server.use("/wishlist", WishlistRouters);
server.use("/", RouteRoutes);
server.listen(3000, () => console.log("Project Server Started..."));