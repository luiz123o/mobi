export function maskify(input: string) {
  const length = input.length;
  if (length <= 4) {
    return input;
  }

  const lastFour = input.slice(length - 4);
  const maskedPart = "#".repeat(length - 4);

  return maskedPart + lastFour;
}

