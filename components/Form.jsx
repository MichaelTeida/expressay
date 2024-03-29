import React from "react";
import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-col flex-start">
      <h1 className="head_text text-left">
        <span className="green_gradient">{type} Post</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share your entry with the world!
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-semibold text-base text-gray-800">
            Your entry
          </span>
          <textarea
            value={post.entry}
            onChange={(e) => setPost({ ...post, entry: e.target.value })}
            placeholder="Write your entry here"
            required
            className="form_textarea"
          />
        </label>
        <label>
          <span className="font-semibold text-base text-gray-800">
            Tag <span className="font-light">(happy, inspiration, idea)</span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder="example_tag"
            required
            className="form_input"
          />
        </label>

        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>

          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-primary-green rounded-lg text-white font-bold"
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
