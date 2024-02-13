"use client";

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const EntryCard = ({ post, handleEdit, handleDelete, handleTagClick }) => {
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();
  const [copied, setCopied] = useState("");

  const handleCopy = () => {
    setCopied(post.entry);
    navigator.clipboard.writeText(post.entry);
    setTimeout(() => setCopied(""), 2000);
  };

  const handleProfileClick = () => {
    if (session?.user.id === post.creator._id) {
      return router.push("/profile");
    }

    router.push(`/profile/${post.creator._id}?name=${post.creator.username}`);
  };

  return (
    <div className="entry_card">
      <div className="flex justify-between items-start gap-5">
        <div
          className="flex-1 flex items-center justify-start gap-3 cursor-pointer"
          onClick={handleProfileClick}
        >
          <Image
            src={post.creator.image}
            alt="user image"
            height={37}
            width={37}
            className="rounded-full object-contain"
          />
          <div className="flex flex-col">
            <h4 className="font-medium">{post.creator.username}</h4>
            <address className="font-light italic ">
              {post.creator.email}
            </address>
          </div>
        </div>
        <div className="copy_btn" onClick={handleCopy}>
          <Image
            src={
              copied === post.entry
                ? "/assets/icons/tick.svg"
                : "/assets/icons/copy.svg"
            }
            width={15}
            height={15}
            alt="copy entry"
          />
        </div>
      </div>
      <p className="my-4 text-gray-800">{post.entry}</p>
      <div className="flex flex-row justify-between items-center">
        <p
          className="text-sm green_gradient cursor-pointer"
          onClick={() => handleTagClick && handleTagClick(post.tag)}
        >
          #{post.tag}
        </p>
        {session?.user.id === post.creator._id && pathName === "/profile" && (
          <div className="flex flex-row gap-4">
            <p
              className="text-sm cursor-pointer green_btn"
              onClick={handleEdit}
            >
              Edit
            </p>
            <p
              className="text-sm backdrop-blur color-red cursor-pointer red_btn"
              onClick={handleDelete}
            >
              Delete
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EntryCard;
