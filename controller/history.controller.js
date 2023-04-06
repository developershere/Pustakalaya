import History from "../models/history.model.js";
export const viewOrderHistory = (request, response, next) => {
    History.findAll().then(result => {
      return response.status(200).json({ history: result, msg: "Your All History", status: true })
    }).catch(err => {
      return response.status(500).json({ err: "Internal Server Error", status: false });
    })
  }
  
  
  export const viewOrderHistoryByuserId = (request, response, next) => {
    History.findByPk({ where: { id: request.params.id } }).then(result => {
      return response.status(200).json({ historyByuser: result, msg: "View Your History", status: false });
    }).catch(err => {
      return response.status(500).json({ err: "Internal Server Error", status: false });
    });
  }