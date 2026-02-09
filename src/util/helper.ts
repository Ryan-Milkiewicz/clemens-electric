export function formatCity(citySlug: string) {
  return citySlug
    .replace("-ny", "")
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}
