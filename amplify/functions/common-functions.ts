export function nullThrows<T>(
  value: T | null,
  errorMessage: string = "Value cannot be null"
): T {
  if (value === null) {
    throw new Error(errorMessage);
  }
  return value;
}
