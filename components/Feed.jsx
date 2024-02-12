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
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [resultPosts, setResultPosts] = useState([]);
  const [posts, setPosts] = useState([]);

  const HandleSearch = (event) => {
    event.preventDefault();
    setSearchText(event.target.value);
    HandleSearchTimeout();
  };

  const FilterPosts = () => {
    const regex = new RegExp(searchText, "i");
    return posts.filter((el) => {
      regex.test(el.username) || regex.test(el.tag) || regex.test(el.entry);
    });
  };

  const HandleSearchTimeout = () => {
    clearTimeout(searchTimeout);

    setSearchTimeout(
      setTimeout(() => {
        setResultPosts(FilterPosts);
      }, 350),
    );
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
          onChange={HandleSearch}
          required
          className="search_input peer"
        />
      </form>

      <EntryCardList data={resultPosts} handleTagClick={() => {}} />
    </section>
  );
};

export default Feed;
