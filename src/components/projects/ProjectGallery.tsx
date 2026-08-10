import Image from "next/image";

import type {
  ProjectGalleryImage,
} from "@/data/apPathPlannerScreenshots";

type ProjectGalleryProps = {
  images:
    ProjectGalleryImage[];
};

export default function ProjectGallery({
  images,
}: ProjectGalleryProps) {
  return (
    <div className="grid gap-8">
      {images.map(
        (
          image,
          index,
        ) => (
          <figure
            key={
              image.src
            }
            className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
          >
            <Image
              src={
                image.src
              }
              alt={
                image.alt
              }
              width={1440}
              height={900}
              priority={
                index ===
                0
              }
              className="h-auto w-full"
            />

            <figcaption className="border-t border-slate-200 px-5 py-4 text-sm leading-6 text-slate-600">
              {
                image.caption
              }
            </figcaption>
          </figure>
        ),
      )}
    </div>
  );
}