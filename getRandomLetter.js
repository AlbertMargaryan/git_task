
function getRandomLetter(){
	let n = "abcdefghijklmnopqrstuvwxyz";
  let x = Math.round(Math.random() * n.length)
	return n[x];
}
console.log(getRandomLetter())
console.log(getRandomLetter())
console.log(getRandomLetter())
console.log(getRandomLetter())