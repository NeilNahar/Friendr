const validateSignUp = (req) => {
    if(req.body.firstName){
        throw new Error("error")
    }
};
module.exports = { validateSignUp };
