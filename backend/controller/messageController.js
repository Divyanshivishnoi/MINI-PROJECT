
import { Message } from '../models/messageModel.js';
export const sendMessage = async (req, res) => {
    try{
    const { name, email, subject, message } = req.body;
    if(!name || !email || !subject || !message){
        return res.status(400).json({
            success:false,
            message:"All fields are required",
    });
}
await Message.creater({name,email,subject,message});
res.status(200).json({
    success:true,
    message:"Message sent successfully"
});
} catch (error){
  return   res.status(500).json({
        success:false,
        error,
    });
}
};