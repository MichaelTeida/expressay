"use client";

import { useState } from "react";
import Image from "next/image";

const EntryCard = ({ post, handleTagClick }) => {
  const [copied, setCopied] = useState("");

  const handleCopy = () => {
    setCopied(post.entry);
    navigator.clipboard.writeText(post.entry);
    setTimeout(() => setCopied(""), 2000);
  };

  return (
    <div className="entry_card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex items-center justify-start gap-3 cursor-pointer">
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
      <p
        className="text-sm green_gradient cursor-pointer"
        onClick={() => handleTagClick && handleTagClick(post.tag)}
      >
        {post.tag}
      </p>
    </div>
  );
};

export default EntryCard;
