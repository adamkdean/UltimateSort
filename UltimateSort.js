var sizes = [
    ['L', 'M', 'S', '2XL', 'XS', 'XL'],
    [8, 12, 14, 10, 20, 16, 18],
    ['D', 'DD', 'E', 'F', 'G', 'FF', 'GG', 'C']
];

var expected = [
    ['XS', 'S', 'M', 'L', 'XL', '2XL'],
    [8, 10, 12, 14, 16, 18, 20],
    ['C', 'D', 'DD', 'E', 'F', 'FF', 'G', 'GG']
];

var filter = function(array, pattern) {
    var filtered = [],
        i = array.length,
        regex = new RegExp(pattern);
    while(i--) {
        if (regex.test(array[i])) {
            filtered.push(array[i]);
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
}

var ultimateSort = function(array) {
    var pattern = /(\d?)xs|s|m|l|(\d?)xl/i,
        matches = filter(array, pattern),
        predicate = (matches.length == array.length)
            ? clothingSizeSort : alphanumericSort;
    array.sort(predicate);
};

for(var i = 0; i < sizes.length; i++) {
    console.log(sizes[i]);
    ultimateSort(sizes[i]);
    console.log(sizes[i]);
    console.log(expected[i]);
    console.log('');
}
