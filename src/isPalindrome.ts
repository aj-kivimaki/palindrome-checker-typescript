export function isPalindrome(input: number | string) {
  // no display when no input
  if (input === "") return "";
  // compare input and reversed input
  // make it string type and uppercase and remove white space for easy comparing
  let reversed = "";
  let string = String(input).toUpperCase().replace(/\s/g, "");
  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
    if (string === reversed) return "This is a Palindrome!";
  }
  return "This is NOT a Palindrome!";
}
