class RegisterPost   {
 
    execute(name:string, email:string,status:string ) {
        console.log(name, email, status);
    }
}

export default new RegisterPost;