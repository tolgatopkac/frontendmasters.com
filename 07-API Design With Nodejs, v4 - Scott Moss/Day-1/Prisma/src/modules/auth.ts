import jwt from "jsonwebtoken"

export const createJWT = (user) => {
  const token = jwt.sign({
    id: user.id,
    username: user.username
  },
    process.env.JWT_SECRET
  )
  return token

}


// custom middleware
// bearer : token
export const protect = (req, res, next) => {
  const bearer = req.headers.authorization

  if (!bearer) {
    res.status(401);
    res.json("Not authorized")
    return
  }





}