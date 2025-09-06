import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  author: string;
  date: string;
}

export default function BlogCard({
  id,
  title,
  description,
  imageUrl,
  author,
  date,
}: BlogCardProps) {
  return (
    <Link href={`/blog/${id}`}>
      <div className="group border border-[#E5E7EB]/40 rounded-lg p-4 transition-colors hover:border-purple-600">
        <div className="relative mb-4">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            width={400}
            height={250}
            className="w-full h-56 object-cover rounded-lg"
          />
        </div>

        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-normal text-[#3012F0] mb-2 group-hover:text-purple-600 flex items-center">
            <Link href={`/blog/${id}`} className="flex-1">
              {title}
            </Link>
            <ArrowUpRight color="black" strokeWidth={2.25} />
          </h3>

          <p className="text-base mb-4 line-clamp-2 leading-6 font-medium text-[#535862]">
            {description}
          </p>

          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden mr-3">
              <Image
                src="https://avatar.iran.liara.run/public"
                alt={author}
                width={40}
                height={40}
                className="object-cover"
              />
            </div>

            <div className="flex flex-col ml-2">
              <p className="text-base font-medium">{author}</p>
              <p className="text-[15px] text-gray-500">{date}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
