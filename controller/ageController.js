const { format } = require("timeago.js");


exports.getAge = async (dateString, res, req, next) => {

    try {

        const dob = req.query.dob;
        
        if (dob === undefined || dob === ""){
            res.status(400).send("Please add a valid parameter")
        }
         
        let finalDob = dob.split("-")


        if (new Date(finalDob).toString() === "Invalid date"){
            let error = new Error("Invalid date format")
            throw error;
        }

        const today = new Date();
        const birthDate = new Date(dateString);
        const month = today.getMonth() - birthDate.getMonth();
        const age = today.getFullYear() - birthDate.getFullYear();
      
        if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
      const timestamp = format(finalDob)
      return res.status(200).send({age: age, timestamp: timestamp})
    } catch (err) {
       next (err)
    }
}







