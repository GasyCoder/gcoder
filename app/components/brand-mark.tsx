import Image from "next/image";

export default function BrandMark({ priority = false }: { priority?: boolean }) {
  return (
    <span className="brand-mark" aria-hidden="true">
      <Image
        src="/brand/gasycoder-logo.png"
        alt=""
        width={64}
        height={64}
        sizes="(max-width: 767px) 40px, 56px"
        priority={priority}
      />
    </span>
  );
}
