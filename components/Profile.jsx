import EntryCard from "@components/EntryCard";

const Profile = ({ name, email, desc, data, handleEdit, handleDelete }) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="green_gradient">{name} </span>profile
      </h1>
      <p className="desc text-left">{desc}</p>
      <p className="text-left text-md mt-4 ">Email: {email}</p>
      <div className="mt-8 entry_layout">
        {data.map((post) => (
          <EntryCard
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;
