import { registerUser } from "../models/registerModels.js";


export const createUser = async (req,res) =>{
    try{
        const {username,email,password}= req.body

    //username
        if (username === null && username === "" && username === undefined)
            return res.status(400).json(
            {Message:"El NOMBRE no puede contener parametros Nulos,Vacíos o Indefinidos"}
        );

        const usernameExiste = await registerUser.findOne ({where: {username}});


        if (usernameExiste){
         return res.status(400).json(
            {Message:"Este username ya está en uso"})
        };
    //
    //email
       if (email === null && email === "" && email === undefined){
        return res.status(400).json(
            {Message:"El EMAIL no puede contener parametros Nulos,Vacíos o Indefinidos"}
        )}; 
        
        const emailExiste = await registerUser.findOne({where: {email}})

        if (emailExiste){
         return res.status(400).json(
            {Message:"Este correo ya está en uso"})
        };
        
        if (email.length>40){
            email = emailLargo
         console.log("El email es muy largo")
         return res.status(400).json({message:"EL Email no puede contener mas de 100 caracteres"})
        }
    //
    //password
    
       if (password === null && password === "" && password === undefined){
        return res.status(400).json(
            {Message:"El PASSWORD no puede contener parametros Nulos,Vacíos o Indefinidos"}
        )}; 

        const passwordlLargo = (password)=>{
        if (password.length>50){
            password = passwordlLargo
         console.log("El password es muy largo")
         return res.status(400).json({message:"EL Password no puede contener mas de 100 caracteres"})}};

    //creandoUser
    const user = await registerUser.create({username,email,password})
    if (user) {
        return res.status(200).json({Message:"Se ha creado el Usuario",user})
    };

    return res.status(400).json ({Message:" No se pudo CREAR el personaje"})

    }catch(error){
        res.status(500).json({Message:"Error al crear el Personaje por parte del servidor"})
    }};





























//ObtenerUser

    export const getUser = async() => {
        try {

             const {username,email,password}= req.body


            const user = registerUser.findAll();
            if (user) {
                return res.status(200).json ({Message:"Se obtuvieron todos los Users",user})}

                return res.status(400).json ({Message:" No se pudo OBTENER el personaje"})
        } catch(error){Message:"Error al CREAR el User por parte del servidor"}};
//














//ObtenerUserbyPK
    export const getUserbyPK = async(req,res)=>{
        try {

             const {username,email,password}= req.body


            const user = registerUser.findByPk(req.params.id)
            if(user) {return res.status(200).json ({Message:"Se encontró el user",user})}
            
        }catch(error){Message:"Error al ObtenerbyPK el USER por parte del servidor"}};
//














    //actualizar User
export const updateUser = async (req, res)=>{
    try{
        const {username, email, password} = req.body;

    //username
        if (username === null && username === "" && username === undefined){
        return res.status(400).json(
            {Message:"El EMAIL no puede contener parametros Nulos,Vacíos o Indefinidos"}
        )}; 

               const usernameLargo = (username)=>{
        if (username.length>100){
            username = usernameLargo
         console.log("El nombre es muy largo")
         return res.status(400).json({message:"EL nombre no puede contener mas de 100 caracteres"})}};
    //
    //email
          if (email === null && email === "" && email === undefined)
        {return res.status(400).json(
            {Message:"El EMAIL no puede contener parametros Nulos,Vacíos o Indefinidos"}
        )}; 

            
        const emailLargo = (email)=>{
        if (email.length>100){
            email = emailLargo
         return res.status(400).json({message:"EL Email no puede contener mas de 100 caracteres"})}};
    //

    //password
           if (password === null && password === "" && password === undefined)
        {return res.status(400).json(
            {Message:"El PASSWORD no puede contener parametros Nulos,Vacíos o Indefinidos"}
        )}; 

        const passwordlLargo = (password)=>{
        if (password.length>100){
            password = passwordlLargo
         console.log("El password es muy largo")
         return res.status(400).json({message:"EL Password no puede contener mas de 100 caracteres"})}};
         //
    
        const user = registerUser.update({username,email,password},{where: {id: req.params.id}})

        if (user) {return res.status(201).json({Message:"Se actualizó el Personaje"})}

        return res.status(400).json ({Message:" No se pudo ACTUALIZAR el personaje"})
        }catch(error) {Message:"Error al crear el Personaje por parte del servidor"}};
//













//eliminarUser
    export const deleteUser = async(req,res)=>{
    try {
        const user = await registerUser.destroy({where:{id: req.params.id}})
        if(user) 
            return res.status(200).json({Message:"Se ELIMINÓ con exito el User"})
        

            return res.status(400).json({Message:"No se pudo ELIMINAR el User"})
    } catch (error) {
        return res.status(500).json({Message:"Error por parte del servidor al ELIMINAR el User"})
    }
};
//