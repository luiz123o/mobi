export function checkIfTheFirstLetterIsUppercase(word: string): boolean {
  const firstLetter = word.charAt(0);
  return /[A-Z]/.test(firstLetter);
}