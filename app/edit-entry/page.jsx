"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Form from "@components/Form";

const EditEntry = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const entryId = searchParams.get("id");

  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    entry: "",
    tag: "",
  });

  useEffect(() => {
    const getEntryDetails = async () => {
      const response = await fetch("/api/entry/" + entryId);
      const data = await response.json();

      setPost({
        entry: data.entry,
        tag: data.tag,
      });
    };
    if (entryId) {
      getEntryDetails();
    }
  }, [entryId]);

  const createEntry = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch("/api/entry/new", {
        method: "POST",
        body: JSON.stringify({
          entry: post.entry,
          userId: session?.user.id,
          tag: post.tag,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form
      type="Edit"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={() => {}}
    />
  );
};

export default EditEntry;
