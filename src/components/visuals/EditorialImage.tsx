import { useState, type CSSProperties, type ImgHTMLAttributes, type ReactNode } from "react";
import { cn } from "../../lib/utils";

type ImageFit = "cover" | "contain";

type VisualImageProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  priority?: boolean;
  fit?: ImageFit;
  aspectRatio?: CSSProperties["aspectRatio"];
  children?: ReactNode;
};

function VisualImage({
  src,
  alt,
  className,
  imageClassName,
  sizes = "100vw",
  priority = false,
  fit = "cover",
  aspectRatio = "4 / 3",
  children,
}: VisualImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [unavailable, setUnavailable] = useState(false);
  const imageProps: ImgHTMLAttributes<HTMLImageElement> & { fetchPriority?: "high" | "auto" } = {
    alt,
    sizes,
    loading: priority ? "eager" : "lazy",
    decoding: "async",
    fetchPriority: priority ? "high" : "auto",
    onLoad: () => setLoaded(true),
    onError: () => setUnavailable(true),
  };

  return (
    <figure
      className={cn("visual-frame relative isolate overflow-hidden bg-warm-beige", className)}
      style={{ aspectRatio }}
      data-asset={src}
    >
      {!unavailable ? (
        <picture>
          <source srcSet={src} type="image/webp" />
          <img
            {...imageProps}
            src={src}
            className={cn(
              "absolute inset-0 size-full transition-opacity duration-500",
              fit === "cover" ? "object-cover" : "object-contain",
              loaded ? "opacity-100" : "opacity-0",
              imageClassName,
            )}
          />
        </picture>
      ) : null}
      <span
        aria-hidden="true"
        className={cn(
          "visual-frame__fallback absolute inset-0 transition-opacity duration-300",
          loaded ? "opacity-0" : "opacity-100",
        )}
      />
      {children}
    </figure>
  );
}

export function EditorialImage(props: VisualImageProps) {
  return (
    <VisualImage
      {...props}
      className={cn(
        "rounded-[2rem] border border-white/80 shadow-[0_38px_90px_-45px_rgba(23,62,53,.5)]",
        props.className,
      )}
    />
  );
}

export function LifestyleImage(props: VisualImageProps) {
  return (
    <VisualImage
      {...props}
      className={cn(
        "rounded-[1.75rem] border border-white/75 shadow-[0_30px_75px_-48px_rgba(23,62,53,.48)]",
        props.className,
      )}
    />
  );
}

export function ProgramMockup(props: VisualImageProps) {
  return (
    <VisualImage
      {...props}
      fit="contain"
      className={cn(
        "rounded-[1.4rem] border border-border/80 bg-card p-2 shadow-[0_26px_55px_-36px_rgba(23,62,53,.55)]",
        props.className,
      )}
      imageClassName={cn("rounded-[.9rem]", props.imageClassName)}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-2 rounded-[.9rem] border border-primary/[.07]"
      />
      {props.children}
    </VisualImage>
  );
}
