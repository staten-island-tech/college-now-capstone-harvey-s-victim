const User = require("../Models/users");

exports.createUser = async (req, res) => {
    try{
        const user = new User(req.body);
        await user.save();
        res.json(user);
    } catch(error) {
        res.status(500).json(error);
    }
};

exports.updateUser = async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      const updates = Object.keys(req.body);
      updates.forEach((update) => (user[update] = req.body[update]));
      await user.save();
      res.json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  };

  exports.deleteUser = async (req, res) => {
    try{
        const user = await User.findById(req.params.id);
        if(user) {
            await User.deleteOne({username: user.username});
        }
    } catch(error) {
        res.status(500).json(error);
    }
  };
  