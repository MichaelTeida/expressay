"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Form from "@components/Form";

const EditEntry = () => {
  const router = useRouter();
  const searchParams = (
    <Suspense fallback={<div>Loading...</div>}>{useSearchParams()}</Suspense>
  );
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

  const editEntry = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    if (!entryId) {
      return console.error("No entry found");
    }
    try {
      const response = await fetch(`/api/entry/${entryId}`, {
        method: "PATCH",
        body: JSON.stringify({
          entry: post.entry,
          tag: post.tag,
        }),
      });

      if (response.ok) {
        router.push("/profile");
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
      handleSubmit={editEntry}
    />
  );
};

export default EditEntry;
