var initialUrl = "/posts/:postId/comments/:commentId";

function replaceParamsInUrl(url, replacements){
// more optimise solution
    return _.reduce(
    replacements,
    function(acc,replacement){
        return _.replace(acc,":"+replacement.from,replacement.to);
    },url
);

    // _.map(replacements, function(replacement){
//     _.replace(initialURL, ":"+replacement.from,replacement.to)
// })
// return result;
// }


var resultUrl = replaceParamsInUrl(initialUrl,[
    {from:"postId",to:"1"},
    {from:"commendId",to:"3"}
]);
