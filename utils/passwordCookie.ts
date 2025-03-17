import Cookies from "js-cookie";
import CryptoJS from "crypto-js";

const COOKIE_NAME = 'walletPassword';
const SECRET_KEY = "pass@123";

//set encrypted Password
export const setPasswordCookie = (password: string)=>{
    const encrypted = CryptoJS.AES.encrypt(password,SECRET_KEY).toString();
    Cookies.set(COOKIE_NAME,encrypted,{expires: 1}) //expires in 1 day
};

// get and decryptPassword from cookie
export const getPasswordCookie = ():string | null => {
    const encrypted = Cookies.get(COOKIE_NAME);
    if(!encrypted){
        console.error("No Password Found")
        return null
    }
    try{
        const bytes = CryptoJS.AES.decrypt(encrypted,SECRET_KEY)
        return bytes.toString(CryptoJS.enc.Utf8)
    }catch(error){
        console.error("Failed to decrypt Password",error)
        return null;
    }
}

//remove password cookie 
export const removePasswordCookie =()=>{
    Cookies.remove(COOKIE_NAME)
}

