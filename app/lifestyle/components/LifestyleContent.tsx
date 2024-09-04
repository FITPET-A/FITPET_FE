import Image from "next/image";

interface LifestyleContentProps {
  title: string;
  content: string;
  hashtags: string[];
  onClick: () => void;
}

export default function LifestyleContent({
  title,
  content,
  hashtags,
  onClick,
}: LifestyleContentProps) {
  return (
    <button
      type="button"
      className="mt-8 flex h-[225px] w-full cursor-pointer text-left"
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          onClick();
        }
      }}
    >
      <div className="mr-6 mt-2 w-[608px] flex-col whitespace-pre-line">
        <h2 className="text-2xl font-semibold text-grayscale-100">{title}</h2>
        <p className="mt-4 text-lg text-grayscale-60">{content}</p>
        <div className="mt-4 flex space-x-2 font-medium text-primary-50">
          {hashtags.map((tag) => (
            <p
              key={tag}
              className="inline-block rounded-[4px] bg-[#D6EDFF] bg-opacity-50 px-3 py-1"
            >
              {tag}
            </p>
          ))}
        </div>
      </div>
      <Image
        src="/assets/example_contents.webp"
        alt="Lifestyle Example Contents"
        className="rounded-3xl object-cover"
        width={400}
        height={225}
      />
    </button>
  );
}
