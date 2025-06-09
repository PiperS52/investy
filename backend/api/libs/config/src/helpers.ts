export function getEnv(name: string): string {
  const value = process.env[name];
  if (value === undefined || value === null) {
    throw new Error(`Environment variable ${name} is not set`);
  }
  return value;
}
