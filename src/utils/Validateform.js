export const Validateform = (email , password , name) => {

    const Email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)

    const Password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)

    const Name = /^[a-zA-Z0-9._-]{2,20}$/.test(name)

    return { Email , Password , Name}

}