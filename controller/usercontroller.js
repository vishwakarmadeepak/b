exports.userget = (req, res) => {
  res.send(" user router is working ");
};

const User = require("../model/userschema");

exports.userRegister = async (req, res) => {
  const file = req.file.filename;
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400).send("please fild all your  fild ");
  }

  const userexist = await User.findOne({ email: email });
  if (userexist) {
    res.status(400).send(" email is alredy registed");
  }

  try {
    const newuser = new User({ name, email, password, img: file });
    const usersave = await newuser.save();
    res.send(usersave);
  } catch (err) {
    console.log(err);
  }
};
