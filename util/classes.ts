export default function classes(...cls: any[]): string {
  return cls.filter(Boolean).join(" ");
}
