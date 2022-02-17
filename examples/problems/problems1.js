const loc=[
    {
    location_key:[32,22,11],
    autoassign:1
    },
    {
        location_key:[41,42],
        autoassign:1
    }];
    
    const bulkConfig=[
        {
            dataValues:{
                config_key:100
            }
        },
        {
            dataValues:{
                config_key:200
            }
        }
    ]
    
    var result = _.map(loc,function(locEl,index){
       return _.map(locEl.location_key,function(location_key){
           return{
               location_key: location_key,
               config_key: bulkConfig[index].dataValues.config_key,
               autoassign: locEl.autoassign
           }
        })
    })
    
    console.log(_.flatten(result))