"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";

import Profile from "@components/Profile";

const MyProfile = () => {
  const { data: session } = useSession();
  const handleEdit = () => {};
  const handleDelete = () => {};

  return (
    <Profile
      name={session?.user.username}
      desc="Welcome to Your profile"
      data={[]}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;
