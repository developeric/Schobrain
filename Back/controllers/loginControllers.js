
import { registerUser } from "../models/registerModels.js";


export const loginUser = async(req,res)=>{
try {
    const {email, password} = req.body;

    const user = await registerUser.findOne({where: {email}})
    if(!user) 
        return res.status(404).json({Message:"El Email no existe"});

    const passwordValida = user.toJSON();
    if (passwordValida.password !== password){
        return res.status(400).json({Message:"Ha ingresado mal la contraseña"})
    };
    res.status(200).json({Message:"Has iniciado sesion"})

} catch (error) {
    console.log("error del catch",error);
    res.status(500).json({Message:"Ha saltado al CATCH de LOGUEO"})
}};