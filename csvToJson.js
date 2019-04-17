const request=require('request')
const csv=require('csvtojson')
const fs =require('fs')
const path =require('path')
const uuidv1=require('uuid/v1')
 const url='https://prod-edxapp.edx-cdn.org/assets/courseware/v1/07d100219da1a726dad5eddb090fa215/asset-v1:Microsoft+DEV283x+3T2018+type@asset+block/customer-data.csv'

csv().fromStream(request.get('https://prod-edxapp.edx-cdn.org/assets/courseware/v1/07d100219da1a726dad5eddb090fa215/asset-v1:Microsoft+DEV283x+3T2018+type@asset+block/customer-data.csv'))
.subscribe((json)=>{
    return new Promise((resolve,reject)=>{
        // long operation for each json e.g. transform / write into database.
    
     console.log(json);


    var folderName = uuidv1()
  fs.mkdirSync(path.join(__dirname, folderName));
  fs.writeFileSync(path.join(__dirname, folderName, 'file.json'),JSON.stringify(json) );  

  // fetchPage(url, (error, data)=>{
  //   if (error) return console.log(error);
    
  //   console.log('downloading is done in folder ', folderName)
  // })})
})})