const { getAuth } = require("firebase-admin/auth");
var SibApiV3Sdk = require("sib-api-v3-sdk");
var defaultClient = SibApiV3Sdk.ApiClient.instance;

const getUsers = async (req, res) => {
  try {
    const lists = await getAuth(global.firebaseApp).listUsers();
    const users = lists.users.map((user) => user.providerData).flat();
    return res.send({ msg: "success", users });
  } catch (error) {}
};

module.exports = { getUsers };
