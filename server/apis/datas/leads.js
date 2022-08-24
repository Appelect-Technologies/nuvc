const Leads = require("../../models/Leads");

const createLead = async (req, res) => {
  try {
    const { name, reason, email, number, message } = req.body;
    await Leads.create({ name, reason, email, number, message });
    return res.status(200).json({ msg: "new lead added" });
  } catch (error) {
    console.log("News added", error);
    return res.status(500).json({ msg: "server error" });
  }
};

const getLeads = async (req, res) => {
  try {
    const leads = await Leads.find().lean();
    return res.status(200).json({ msg: "successful", leads });
  } catch (error) {
    return res.status(500).json({ msg: "server error" });
  }
};

module.exports = {
  createLead,
  getLeads,
};
