import Image from "next/image";

type ProjectScreenshotProps = {
  src: string;
  alt: string;
  priority?: boolean;
};

export default function ProjectScreenshot({
  src,
  alt,
  priority = false,
}: ProjectScreenshotProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <Image
        src={src}
        alt={alt}
        width={1440}
        height={900}
        priority={priority}
        className="h-auto w-full"
      />
    </div>
  );
}