import Category from "../models/category.model.js"
export const addCategory = async (request, response, next) => {
    console.log(request.body);
    try {
      for (let category of request.body.category) {
        await Category.create({ name: category });
      }
      return response.status(200).json({ msg: "Add Category Succesfully", status: true });
  
    } catch (err) {
      console.log(err);
      return response.status(500).json({ msg: "Internal Server Error", status: false });
    }
  
  }
  
  export const deleteCategory = async (request, response, next) => {
    console.log(request.body.id);
    try {
      let category = await Category.findOne({ raw: true, where: { id: request.body.id } });
      if (!category)
        return response.status(404).json({ err: "Response Not Found", status: false });
      let status = Category.destroy({ raw: true, where: { id: request.body.id } });
      if (status)
        return response.status(200).json({ msg: "Category Remove SuccesFully ", status: true });
      return response.status(404).json({ err: "Request Resource Not Found", status: false });
  
    } catch (err) {
      console.log(err);
    }
  }
  
  export const viewAllCategory = (request, response, next) => {
    Category.findAll().then(result => {
      return response.status(200).json({ categoryList: result, msg: "View All CategoryList" })
    })
      .catch(err => {
        return response.status(500).json({ msg: "Internal Server Error", status: false });
      });
  
  }
  
  export const editCategory = async (request, response, next) => {
    try {
      const category = await Category.findByPk(request.body.id).then(result => {
        return result.dataValues
      });
  
      if (!category)
        return response.status(404).json({ error: "Request Resource Not Found", status: false });
      let status = await Category.update({ categoryName: request.body.categoryName }, {
        where: {
          id: request.body.id
        }
      })
      return response.status(200).json({ category: { ...category, category: request.body.categoryName }, message: "Update Category", status: true });
    } catch (err) {
      return response.status(500).json({ error: "Internal Server Error", status: false });
    }
  }
  
  