  /*
    IMPLEMENT

    1- On valid token in the Authorization header, call next.

    2- On missing token in the Authorization header,
      the response body should include a string exactly as follows: "token required".

    3- On invalid or expired token in the Authorization header,
      the response body should include a string exactly as follows: "token invalid".
  */
function restricted(req, res, next) {
  next()
}

async function checkUsernameFree(req, res, next) {
  next()
}

async function checkUsernameExists(req, res, next) {
  next()
}

async function checkPasswordLength(req, res, next) {
  next()
}

module.exports = {
  restricted,
  checkUsernameFree,
  checkUsernameExists,
  checkPasswordLength
}
