module.exports = function reverse (n) {
    if(n<0){
        n=(-1) * n;
    }
    return Number((""+n).split('').reverse().join(''))
}
