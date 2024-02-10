"use client";

import EntryCard from "@components/EntryCard";
import { useState, useEffect } from "react";

const EntryCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 entry_layout">
      {data.map((post) => (
        <EntryCard key={post._id} post={post} handleTagClick={handleTagClick} />
      ))}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchText(event.target.value);
  };

  const fetchPosts = async () => {
    try {
      const response = await fetch("/api/entry");
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <section className="feed">
      <form className="realtive w-full flex-center">
        <input
          type="text"
          placeholder="Search for a entry or a tag"
          value={searchText}
          onChange={handleSearch}
          required
          className="search_input peer"
        />
      </form>

      <EntryCardList data={posts} handleTagClick={() => {}} />
    </section>
  );
};

export default Feed;
