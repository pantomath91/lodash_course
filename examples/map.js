let users={
    1:{
        name:'Sachin'
    },
    2:{
        name:'Sourajit'
    }
}

var arr_numbers = _.map(users,(users)=>{
    return {
        modifiedName: users.name
    }
});

console.log(users)
console.log(arr_numbers)