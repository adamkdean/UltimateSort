var ultimateSort = function(array) {  
    var filter = function(input, pattern) {
        var filtered = [],
            i = input.length,
            regex = new RegExp(pattern);
        while(i--) {
            if (regex.test(input[i])) {
                filtered.push(input[i]);
            }
        }
        return filtered;
    };

    var alphanumericSort = function(a, b) {
        var ai = parseFloat(a), bi = parseFloat(b);
        return (isNaN(ai) || isNaN(bi)) 
            ? a > b ? 1 : a < b  ? -1 : 0 
            : ai > bi ? 1 : ai < bi ? -1 : 0;
    };

    var clothingSizeSort = function(a, b) {
        var weights = ['3xs', '2xs', 'xs', 's', 'm', 'l', 'xl', '2xl', '3xl'],
            offset = (weights.length - 1) / 2,
            aw = weights.indexOf(a.toLowerCase()) - offset,    
            bw = weights.indexOf(b.toLowerCase()) - offset;
        return aw - bw;
    };

    var sort = function(array) {
        var pattern = /(\d?)xs|s|m|l|(\d?)xl/i,
            matches = filter(array, pattern),
            predicate = (matches.length == array.length)
                ? clothingSizeSort : alphanumericSort;
        array.sort(predicate);
    };
    
    return sort(array);
};
