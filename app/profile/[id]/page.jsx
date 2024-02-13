"use client";

import { useState, useEffect } from "react";

import Profile from "@components/Profile";
import { useSearchParams } from "next/navigation";

const UserProfile = ({ params }) => {
  const searchParams = useSearchParams();
  const userName = searchParams.get("name");
  const email = searchParams.get("email");

  const [userPosts, setUserPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await fetch(`/api/users/${params?.id}/posts`);
      const data = await response.json();
      setUserPosts(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (params?.id) {
      fetchPosts();
    }
  }, [params?.id]);

  return (
    <Profile name={userName} email={email} desc="Profile" data={userPosts} />
  );
};

export default UserProfile;
