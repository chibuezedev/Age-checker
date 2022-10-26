const { format } = require("timeago.js");


exports.getAge = async (dateString, res, req, next) => {

  try {

        //calculate the for the age
        const today = new Date();
        const birthDate = new Date(dateString);
        const month = today.getMonth() - birthDate.getMonth();
        const age = today.getFullYear() - birthDate.getFullYear();
      
        //validate all neccessary inputs
        if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
          return age;

      if (age === undefined || age === ""){
        res.status(400).send("Please add a valid parameter")
    }
     
    if (new Date(age).toString() === "Invalid date"){
        let error = new Error("Invalid date format")
        throw error;
    }
     //format input to standard date format

      res.status(200).send(age)
    } catch (err) {
       next (err)
    }
    }
  







