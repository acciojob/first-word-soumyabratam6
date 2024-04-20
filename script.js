function firstWord(s) {
  // your code here
	if (!s || s.indexOf(' ') === -1) {
    return str;
  }
  return s.slice(0, s.indexOf(' '));
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
