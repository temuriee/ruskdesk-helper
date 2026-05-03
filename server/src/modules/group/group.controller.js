const Group = require("./group.model");
const AppError = require("../../utils/AppError");

// CREATE GROUP
exports.createGroup = async (req, res, next) => {
  try {
    const { code } = req.body;

    const existing = await Group.findOne({ code });

    if (existing) {
      return next(new AppError("Group already exists", 400));
    }

    const group = await Group.create({
      code,
      createdBy: req.admin._id,
    });

    res.status(201).json({
      success: true,
      group,
    });
  } catch (err) {
    next(err);
  }
};

// GET ALL GROUPS
exports.getGroups = async (req, res, next) => {
  try {
    const groups = await Group.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      groups,
    });
  } catch (err) {
    next(err);
  }
};
