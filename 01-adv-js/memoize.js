function memoize(fn){
    var results = {};
    return function(){
        var key = JSON.stringify(arguments);
        if (typeof results[key] === 'undefined')
            results[key] = fn.apply(this, arguments);
        return results[key];
    }
}

var add = memoize(function(x,y){
    console.log('processing ', x , ' and ', y);
    return x + y;
});