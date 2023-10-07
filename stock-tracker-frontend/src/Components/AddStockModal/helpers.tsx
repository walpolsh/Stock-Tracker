export function replaceUnderscores(name: string) {
  return name.replace('_', ' ');
}
export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
