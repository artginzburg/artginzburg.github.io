interface StatsBadgeProps {
  href: string;
  src: string;
  alt: string;
}

export default function StatsBadge({ href, src, alt }: StatsBadgeProps) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <img
        src={src}
        alt={alt}
        className="portfolio__stats-badge"
      />
    </a>
  );
}
