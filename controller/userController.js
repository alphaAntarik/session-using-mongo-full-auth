const UserModel=require('../models/userModel')


exports.userSignup = (req, res) => {
    const user = new UserModel(req.body)
    user.save().then((doc) => {
         req.session.user = doc;
        return res.json(doc)
    }).catch((err) => {
        
        
        return res.json({ err: err.message })
    })
}
exports.logout = (req, res) => {
    req.session.destroy((err) => {
        console.log(err);
        return res.json({message:'session deleted and logged out'})
       
   })
}