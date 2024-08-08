export const validateaddresss = (number , pincode ) => {

    const Number = /^[7890]\d{9}$/.test(number)

    const Pincode = /^(\d{4}|\d{6})$/.test(pincode)
    
    return {
        Number , 
        Pincode , 
        
    }
 


}