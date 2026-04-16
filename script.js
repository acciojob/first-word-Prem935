function firstWord(s) {
  // your code here
	let res = ''
	s = s.trim()
	for(let i=0;i<s.length;i++){
		if(s[i] != ' ') res += s[i]
		else break;
	}
	return res
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
