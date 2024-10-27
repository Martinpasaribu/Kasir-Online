import Users from "../models/UserModel.js";


export const verifyID = async (req, res, next) => {
      
    // kalo server direset sessionn akan hilang
    if(!req.session.userId){
        return res.status(401).json({message: "Session empty, Login again "});
    }
    
    const user = await Users.findAll( {
        where : {
            uuid: req.session.userId
        }
    });
    if(!user) return res.status(404).json({message: "User sessionID tidak ditemukan"});
    req.userId = user[0].uuid.toString();
    next();    
}