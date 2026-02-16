import type { PortableTextBlock } from "@portabletext/types";

export function formatCity(citySlug: string) {
  return citySlug
    .replace("-ny", "")
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export function replaceCity(
  content: PortableTextBlock[],
  city: string,
): PortableTextBlock[] {
  return content.map((block) => {
    if (!block.children) return block;

    return {
      ...block,
      children: (block.children as any[]).map((child: any) => {
        if (child._type === "span" && typeof child.text === "string") {
          return {
            ...child,
            text: child.text.replace(/{{city}}/g, city),
          };
        }
        return child;
      }),
    };
  });
}
