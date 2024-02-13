"use client";

import { useState, useEffect } from "react";

import Profile from "@components/Profile";
import { useSearchParams } from "next/navigation";

const UserProfile = ({ params }) => {
  const searchParams = useSearchParams();
  const userName = searchParams.get("name");

  const [userPosts, setUserPosts] = useState([]);
  const [userEmail, setUserEmail] = useState("");

  const fetchPosts = async () => {
    try {
      const response = await fetch(`/api/users/${params?.id}/posts`);
      const data = await response.json();
      setUserPosts(data);
      if (data.length > 0 && data[0].creator && data[0].creator.email) {
        setUserEmail(data[0].creator.email);
      }
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
    <Profile
      name={userName}
      email={userEmail}
      desc={`This user has ${userPosts.length} posts.`}
      data={userPosts}
    />
  );
};

export default UserProfile;
