import User from '../models/user.model.js';
import Book from '../models/book.model.js';
import Cart from '../models/cart.model.js';
import Category from '../models/category.model.js';
import City from '../models/city.model.js';
import Delivery from '../models/delivery.model.js';
import History from '../models/history.model.js';
import Order from '../models/order.model.js';
import State from '../models/state.model.js';
import Orders from '../models/Orders.models.js';
Category.hasMany(Book,{
    foreignKey: "id"
});
Book.belongsTo(Category,{
    foreignKey: "categoryID", targetKey: "id"
});
State.hasMany(City,{foreignKey:'id'});
City.belongsTo(State,{foreignKey:'stateId',targetKey: 'id'});
User.hasOne(Order,{foreignKey:'id'});
Order.belongsTo(User,{foreignKey:'userId',targetKey:'id'});
Order.belongsToMany(User,{through:Orders});
Order.belongsToMany(Book,{through:Orders});
History.hasOne(User,{foreignKey:'id'});
User.belongsTo(User,{foreignKey:'userId',targetKey:'id'})
History.hasOne(Order,{foreignKey:'id'});
Order.belongsTo(History,{foreignKey:'orderId',targetKey:'id'});
export {Category,Book,User,Order,City,State,History};