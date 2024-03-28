const Room = require("../Models/Room");

exports.createRoom = async (req, res) => {
    try{
        const room = new Room(req.body);
        await room.save();
        res.json(room);
    } catch(error) {
        res.status(500).json(error);
    }
};

exports.connectUser = async (req, res) => {
    try{ 
      const room = await Room.findById(req.params.id);
      const updates = Object.keys(req.body);
      updates.forEach((update) => (user[update] = req.body[update]));
      await room.save();
      res.json(room);
    } catch(error) {
      res.status(500).json(error);
    }
  };