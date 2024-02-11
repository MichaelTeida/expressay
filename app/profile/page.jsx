"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Profile from "@components/Profile";

const MyProfile = () => {
  const router = useRouter();
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

  const handleEdit = (post) => {
    router.push("/edit-entry?id=" + post._id);
  };
  const handleDelete = async (post) => {
    const confirmed = confirm("Are you sure you want to delete this post?");

    if (confirmed) {
      try {
        await fetch(`/api/entry/${post._id.toString()}`, {
          method: "DELETE",
        });
        const filteredPosts = posts.filter(
          (filteredPost) => filteredPost._id !== post._id,
        );
        console.log(filteredPosts);
        setPosts(filteredPosts);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <Profile
      name={session?.user.name}
      email={session?.user.email}
      desc="Welcome to Your profile"
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;
