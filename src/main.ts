import { isPalindrome } from "./isPalindrome";

const inputEl = document.getElementById("search")! as HTMLInputElement;
const resultEl = document.getElementById("result")! as HTMLHeadingElement;

inputEl.addEventListener("change", showResult);

function showResult(e: Event): void {
  const searchTerm = (e.target as HTMLInputElement).value;
  if (searchTerm) resultEl.innerHTML = isPalindrome(searchTerm);
}
