function reverseNumber() {
    let inpNumber = document.getElementById("inp-number").value;
    let number = inpNumber.toString().split('').reverse().join('');
    return document.getElementById("out-number").value = number;
}
function reverseName() {
    let inpName = document.getElementById("inp-name").value;
    let name = inpName.split('').reverse().join('');
    return document.getElementById("out-name").value = name;
}