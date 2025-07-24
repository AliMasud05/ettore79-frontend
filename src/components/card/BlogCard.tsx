import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface BlogCardProps {
  title: string;
  description: string;
  imageUrl: string;
  author: string;
  date: string;
}

export default function BlogCard({
  title,
  description,
  imageUrl,
  author,
  date,
}: BlogCardProps) {
  return (
    <div className="group">
      <div className="relative mb-4">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          width={400}
          height={250}
          className="w-full h-56 object-cover rounded-lg"
        />
      </div>

      <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-600 flex items-center">
        <Link
          href={`/blog/${title.toLowerCase().replace(/\s+/g, "-")}`}
          className="flex-1"
        >
          {title}
        </Link>
        <ArrowRight className="h-4 w-4 text-purple-600" />
      </h3>

      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>

      <div className="flex items-center">
        <div className="h-8 w-8 rounded-full bg-gray-200 overflow-hidden mr-3">
          <Image
            src="https://avatar.iran.liara.run/public"
            alt={author}
            width={32}
            height={32}
            className="object-cover"
          />
        </div>

        <div>
          <p className="text-sm font-medium">{author}</p>
          <p className="text-xs text-gray-500">{date}</p>
        </div>
      </div>
    </div>
  );
}
