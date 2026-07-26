import { MarketingContainer } from "../marketing/MarketingContainer";
import { LifestyleImage } from "./EditorialImage";

export function ImageSection({
  src,
  alt,
  align = "right",
}: {
  src: string;
  alt: string;
  align?: "left" | "right";
}) {
  return (
    <section className="image-section" aria-label={alt}>
      <MarketingContainer>
        <div className={align === "left" ? "mr-auto" : "ml-auto"}>
          <LifestyleImage
            src={src}
            alt={alt}
            sizes="(min-width: 1024px) 72vw, 92vw"
            aspectRatio="16 / 7"
          />
        </div>
      </MarketingContainer>
    </section>
  );
}
