const responseError = (res, status, success, messgae, stack) => {
  res.status(status).send({
    messgae,
    success,
    stack,
  })
}

module.exports = responseError
