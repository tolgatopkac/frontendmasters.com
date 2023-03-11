import express from "express";
import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";
import * as url from "url";
import bcrypt from "bcryptjs";
import * as jwtJsDecode from "jwt-js-decode";
import base64url from "base64url";
import SimpleWebAuthnServer from "@simplewebauthn/server";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const app = express();
app.use(express.json());

const adapter = new JSONFile(__dirname + "/auth.json");
const db = new Low(adapter);
await db.read();
db.data ||= { users: [] };

const rpID = "localhost";
const protocol = "http";
const port = 5050;
const expectedOrigin = `${protocol}://${rpID}:${port}`;

// static serving public folder
app.use(express.static("public"));
// read body parsing json
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// check user
function findUser(email) {
  const results = db.data.users.filter((u) => u.email == email);
  if (results.length == 0) return undefined;
  return results[0];
}

// ADD HERE THE REST OF THE ENDPOINTS
app.post("/auth/login", (req, res) => {
  // check user existS?
  const userFound = findUser(req.body.email);

  if (userFound) {
    // user Found, Check password
    if (bcrypt.compareSync(req.body.password, userFound.password)) {
      res.send({ ok: true, name: userFound.name, email: userFound.email });
    } else {
      res.send({
        ok: false,
        message: "Credential are wrong.",
      });
    }
  } else {
    // User Not Found
    res.send({
      ok: false,
      message: "Credential are wrong.",
    });
  }
});

app.post("/auth/register", (req, res) => {
  // req = get all the information coming the browser
  // res = send information the browser

  // hashPassword
  const salt = bcrypt.genSaltSync(10);
  const hashedPass = bcrypt.hashSync(req.body.password, salt);

  // TODO : DATA VALIDATION
  const user = {
    name: req.body.name,
    email: req.body.email,
    // password: req.body.password,
    password: hashedPass,
  };

  const userFound = findUser(user.email);
  if (userFound) {
    // user already existed
    res.send({ ok: false, message: "User already exists" });
  } else {
    // user is new, we are good!
    db.data.users.push(user);
    db.write();
    res.send({ ok: true });
  }
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "public/index.html");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
