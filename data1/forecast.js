
  const request = require("request")


const forecast = (longtitude,latitude,callback) => {

  const url = "http://api.weatherapi.com/v1/current.json?key=c0b0b81135104a5e86a153304240403&q=" + latitude + "," + longtitude
    
    request ({url , json : true  } , (error , response) => {
    
        if (error) {
            callback ( "unable to connect weather api service" , undefined )
        } else if (response.body.error){
             callback (response.body.error.message , undefined )
        }else {
    
             callback (undefined , response.body.location.name + " it is : " + response.body.current.condition.text 
            + "and temp is : "  + response.body.current.temp_c )
        }
    })
      }

    module.exports = forecast

