// obviously these aren't "real" tests, they are just pretend tests
// and you should have the UltimateSort.js included somehow, somewhere
// but this snippet is just to show you the sort works

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

for(var i = 0; i < sizes.length; i++) {
    console.log(sizes[i]);
    ultimateSort(sizes[i]);
    console.log(sizes[i]);
    console.log(expected[i]);
    console.log('');
}
