export const viewOrderHistory = (request, response, next) => {
    History.findAll().then(result => {
      return response.status(200).json({ history: result, msg: "Your All History", status: true })
    }).catch(err => {
      return response.status(500).json({ err: "Internal Server Error", status: false });
    })
  }