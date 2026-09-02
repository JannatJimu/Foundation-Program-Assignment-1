function describeValue(value) {
    const type = typeof value;
    const checkTruthiness = value ? "truthy" : "falsy";
    return `${type} | ${checkTruthiness}`;
}

console.log(describeValue("hello"));
console.log(describeValue(""));
console.log(describeValue(25));
console.log(describeValue(0));
console.log(describeValue(true));
console.log(describeValue(null));
console.log(describeValue(undefined));

console.log(describeValue("0"));
console.log(describeValue(NaN));
console.log(describeValue(null)); 
