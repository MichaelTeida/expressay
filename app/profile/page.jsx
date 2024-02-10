"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

import Profile from "@components/Profile";

const MyProfile = () => {
  const { data: session } = useSession();

  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (session?.user.id) {
      fetchPosts();
    }
  }, []);

  const handleEdit = () => {};
  const handleDelete = () => {};

  return (
    <Profile
      name={session?.user.username}
      desc="Welcome to Your profile"
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;
