const responseError = require('../responses/responseError')

const validate = (schema) => async (req, res, next) => {
  try {
    await schema.validate({
      body: req.body,
      query: req.query,
      params: req.params,
    })
    return next()
  } catch (err) {
    responseError(res, 500, false, err?.message, null)
  }
}

module.exports = validate
