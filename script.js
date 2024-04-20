function firstWord(s) {
  // your code here
	return s.slice(0, s.indexOf(' '));
	
	if (!s || s.indexOf(' ') === -1) {
    return s;
  }
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
