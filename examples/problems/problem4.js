var backenedErrors={
email:{
    errors:[
        {
            message:'Cant be blank'
        }
    ]
},
password:{
    errors:[
        {
            message:'Must contain symbols in different case'
        },
        {
            message: 'Must be at least 8 symbols length'
        }
    ]
},
passwordConfirmation:{
    errors:[
        {
            message:'Must match with password'
        }
    ]
}}

function getErrors(backenedErrors){
    var result = _.map(backenedErrors, function(value,field){
        var  fieldMessages = _.chain(value.errors)
        .map('message')
        .join(", ")
        .value();
        return _.upperFirst(field)+":"+fieldMessages
    })
    return result
}

console.log(getErrors(backenedErrors));