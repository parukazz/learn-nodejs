const response = (statusCode, data, message, res) => {
  // res.status(statusCode).json({
  //   payload: {
  //     status_code: statusCode,
  //     datas: data,
  //     message: message
  //   },
  //   pagination: {
  //     prev: "",
  //     next: "",
  //     max: ""
  //   }
  // })
  res.json(statusCode, [
    {
      data,
      message,
      metadata: {
        prev: "",
        next: "",
        current: ""
      }
    }
  ])
}

module.exports = response