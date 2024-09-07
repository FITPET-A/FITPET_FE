import Image from "next/image";

interface LifestyleContentProps {
  title: string;
  content: string;
  hashtags: string[];
  imageSrc: string;
  onClick: () => void;
}

export default function LifestyleContent({
  title,
  content,
  hashtags,
  imageSrc,
  onClick,
}: LifestyleContentProps) {
  return (
    <button
      type="button"
      className="flex w-full flex-col justify-between gap-3 whitespace-pre-line tablet:h-[225px] tablet:flex-row tablet:gap-6"
      onClick={onClick}
    >
      <div className="mt-2 flex flex-grow flex-col justify-between gap-3 text-left tablet:gap-4">
        <div className="w-full tablet:hidden">
          <Image
            src={imageSrc}
            alt="Lifestyle Example Contents"
            className="rounded-3xl object-cover"
            width={1000}
            height={225}
          />
        </div>
        <h2 className="h-9 overflow-hidden text-ellipsis font-paperlogy-title text-3xl text-grayscale-100">
          {title}
        </h2>
        <p className="text-lg text-grayscale-60">{content}</p>
        <div className="flex w-full flex-wrap gap-2 font-medium text-primary-50">
          {hashtags.map((tag) => (
            <p
              key={tag}
              className="text-esllipsis rounded-[4px] bg-[#D6EDFF] bg-opacity-50 px-3 py-1 text-md font-medium"
            >
              {tag}
            </p>
          ))}
        </div>
      </div>
      <div className="flex-shrink-0">
        <Image
          src={imageSrc}
          alt="Lifestyle Example Contents"
          className="hidden rounded-3xl object-cover tablet:block"
          width={400}
          height={225}
        />
      </div>
    </button>
  );
}
