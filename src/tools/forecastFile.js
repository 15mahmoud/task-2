const request = require('request')
const forecast = (latitude,longitude,callback) =>{
    const url = "http://api.weatherapi.com/v1/current.json?key=c0b0b81135104a5e86a153304240403&q=" + latitude + ',' + longitude
   // http://api.weatherapi.com/v1/current.json?key=c0b0b81135104a5e86a153304240403&q=London&aqi=no
       request({url,json:true},(error,response)=>{
        // low level error 
        if(error){
            callback('Unable to connect weather service',undefined)
        }
        else if(response.body.error){
           callback(response.body.error.message,undefined)
        }
        else {
           callback(undefined,response.body.location.name + 
            ' It is ' + response.body.current.condition.text + ' and temp is ' + response.body.current.temp_c)
        }
    }) 
}
module.exports = forecast