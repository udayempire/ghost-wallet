import CryptoJS from "crypto-js";

// Encrypting an object to a ciphertext string
export const encryptData = (data:object , secretKey: string):string=>{
    return CryptoJS.AES.encrypt(JSON.stringify(data),secretKey).toString();
}

// Decrypt a ciphertext string back to an object
export const decryptData = (cipherText: string, secretKey:string)=>{
    const bytes = CryptoJS.AES.decrypt(cipherText,secretKey);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8))
}