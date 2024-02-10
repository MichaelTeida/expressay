"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const EntryCard = ({ post, handleTagClick }) => {
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
      </div>
    </div>
  );
};

export default EntryCard;
