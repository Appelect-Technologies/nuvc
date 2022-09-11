const { getAuth } = require("firebase-admin/auth");
var SibApiV3Sdk = require("sib-api-v3-sdk");
var defaultClient = SibApiV3Sdk.ApiClient.instance;

const register = async (req, res) => {
  try {
    const { name, email, password, role = "student" } = req.body;
    const { uid } = await getAuth(global.firebaseApp).createUser({
      email: email,
      emailVerified: false,
      password: password,
      displayName: name,
      photoURL: "http://www.example.com/12345678/photo.png",
      disabled: false,
    });

    console.log(uid);

    SibApiV3Sdk.ApiClient.instance.authentications["api-key"].apiKey =
      "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";

    // .generateEmailVerificationLink(email, { url: "https://nuvc.org" })
    getAuth(global.firebaseApp)
      .setCustomUserClaims(uid, { role: role })
      .then(() => {
        console.log("user created");

        new SibApiV3Sdk.TransactionalEmailsApi()
          .sendTransacEmail({
            sender: { email: "seedonline21@gmail.com", name: "Seed Online" },
            subject: "Registered Successfully",
            templateId: 27,
            params: {
              greeting: "Congrats! " + name,
              headline:
                "You successfully registered with SeedOnline \n your password " +
                password,
            },
            messageVersions: [
              {
                to: [
                  {
                    email: { email },
                    name: { name },
                  },
                ],
                params: {
                  greeting: "Congrats! " + name,
                  headline:
                    "You successfully registered with SeedOnline \n your password " +
                    password,
                },
                subject: "Registered Successfully with SeedOnline!",
              },
            ],
          })
          .then(
            function (data) {
              console.log("email successful response: ", data);
            },
            function (error) {
              console.error("email successful error: ", error);
            }
          );
      });
    res.status(200).json({ msg: "success" });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ msg: "fail" });
  }
};

module.exports = { register };
