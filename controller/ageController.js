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
  





    // try {
    //     const dob = req.query.dob;
    //     if (dob === undefined || dob === "") {
    //       return res.status(400).send("Please add a query parameter with a valid timestamp to it");
    //     }
    
    //     // Put them in proper format
    //     let formattedDOB1 = dob.split(" ")[0];
    //     let formattedDOB2 = dob.split(" ")[1];
    //     const final = `${formattedDOB1}+${formattedDOB2}`;
    
    //     // check if query is in a valid date format
    //     if (new Date(final).toString() === "Invalid Date") {
    //       let error = new Error("Invalid date parameter");
    //       error.statusCode = 400;
    //       throw error;
    //     }
    
    //     const time = format(final);
    //     res.status(200).send(time);
    //   } catch (err) {
    //     next(err);
    //   }





