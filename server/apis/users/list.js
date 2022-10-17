const { getAuth } = require("firebase-admin/auth");
var SibApiV3Sdk = require("sib-api-v3-sdk");
var defaultClient = SibApiV3Sdk.ApiClient.instance;

let users = [];

const getUsers = async (req, res) => {
  try {
    await getAllUsers();
    const filtereddata = users
      .flat()
      .map((_) => _.providerData)
      .flat();
    return res.send({ msg: "success", users: filtereddata });
  } catch (error) {
    return res.status(400).json({ msg: "error", error: error.message });
  } finally {
    users = [];
  }
};

async function getAllUsers(pageToken) {
  let results = {};
  if (pageToken) {
    results = await getAuth(global.firebaseApp).listUsers(1000, pageToken);
  } else {
    results = await getAuth(global.firebaseApp).listUsers(1000);
  }
  users.push(results.users);
  if (results.pageToken) {
    await getAllUsers(results.pageToken);
  }
}

module.exports = { getUsers };
