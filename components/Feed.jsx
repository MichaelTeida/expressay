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
  const [posts, setPosts] = useState([]);

  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [resultPosts, setResultPosts] = useState([]);

  const HandleSearch = (event) => {
    event.preventDefault();
    setSearchText(event.target.value);
    HandleSearchTimeout(event.target.value);
  };

  const FilterPosts = (searchedText) => {
    const regex = new RegExp(searchedText, "i");
    return posts.filter((el) => {
      return (
        regex.test(el.username) || regex.test(el.tag) || regex.test(el.entry)
      );
    });
  };

  const HandleSearchTimeout = (searchedText) => {
    setTimeout(() => {
      const filteredPosts = FilterPosts(searchedText);
      setResultPosts(filteredPosts);
    }, 350);
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
