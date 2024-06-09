const User = require('../models/user.model');

exports.createUser = async (req, res) => {
    try {
        const { firstName, lastName, email, contactNumber, address1, address2 } = req.body;
        const newUser = new User({ firstName, lastName, email, contactNumber, address1, address2 });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Error creating user', error: error.message });
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        const data = await User.find({});
        res.status(200).json(data);
    } catch (err) {
        console.error('Error retrieving data:', err);
        res.status(500).json({ message: err.message });
    }
};
