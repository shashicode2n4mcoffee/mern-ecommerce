const userDetails = (user) => {
  return {
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email,
    mobile: user.mobile,
    role: user.role,
    isBlocked: user.isBlocked,
  }
}

module.exports = userDetails
