function addAndPrint(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndPrint(10, 20, function (result) {
    console.log(result);
});
