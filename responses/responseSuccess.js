const responseSuccess = (res, status = 400, success, message) => {
  res.status(status).send({
    message,
    success,
  })
}
module.exports = responseSuccess
