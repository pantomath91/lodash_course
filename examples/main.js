var isAuthor=false;
var isInFocus=true;
var liClass=classNames({
    item:true,
    active:isAuthor,
    'item-hightlighted':isInFocus
});

// output: //item item-highlighted


const classNames = (conditions)=>{
    //optimise function
    var getUsedClassName = function(value,key){
        return value?key:undefined
    };
    return _.chain(conditions)
    .map(getUsedClassName)
    .compact()
    .join(" ")
    .value()

    // simple function
    // var foo = _.map(conditions,function(value,key){
    //    return value? key:undefined;
    // })
    // return _.join(_.compact(foo)," ")
}

console.log(result);