var flastlist = [
    {
        id:1,
        name: "lvl 1 item1",
        parentId:null
    },
    {
        id:2,
        name: "lvl 1 item 2",
        parentId:null
    },
    {
        id:3,
        name:"lvl 2 item 3",
        parentId:1
    },
    {
        id:4,
        name:"lvl 3 item 4",
        parentId:3
    },
    {
        id:5,
        name:"lvl 2 item 5",
        parentId:2
    }
]

var addChildren = function(item){
var children = _.filter(flastlist, function(childItem){
    return childItem.parentId === item.id;
})
var nestedChildren=[];

if(!_.isEmpty(children)){
    nestedChildren = _.map(children,addChildren);
}

return _.assign({},item,{children:nestedChildren})
}

var nestedList = _.chain(flastlist)
.filter(function(item){
    return item.parentId === null;
})
.map(addChildren)
.value()