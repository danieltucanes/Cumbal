import patternSvg from "../assets/Frame 3.svg";

type PastosDividerProps = {
  className?: string;
  height?: number;
};

export default function PastosDivider({
  className = "",
  height = 40,
}: PastosDividerProps) {
  return (
    <div
      className={`w-full bg-repeat-x bg-center ${className}`}
      style={{
        height: `${height}px`,
        backgroundImage: `url(${patternSvg})`,
        backgroundSize: `auto ${height}px`,
      }}
      aria-hidden="true"
    />
  );
}