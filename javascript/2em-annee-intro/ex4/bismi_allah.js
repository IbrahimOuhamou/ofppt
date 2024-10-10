// بسم الله الرحمن الرحيم
// la ilaha illa Allah Mohammed rassoul Allah

console.log("بسم الله الرحمن الرحيم");

function U(n) {
    if(n < 2) return 1;
    return U(n - 1) + U(n - 2);
}

let memoized_results = [1, 1];
function UFast(n) {
    console.log(`doing ${n}`);
    if(n < 2) return 1;
    if(memoized_results[n]) return memoized_results[n];
    memoized_results[n] = UFast(n - 1) + UFast(n - 2);
    return memoized_results[n];
}

// console.log(U(40));
console.log(UFast(90));


