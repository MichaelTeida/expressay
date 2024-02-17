import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-col">
      <h1 className="head_text">
        <span className="green_gradient text-center">
          Express and share swiftly
        </span>
      </h1>
      <p className="desc">
        Create, share, and explore entries from a diverse community of users.
        Connect, inspire, and discover through the power of expression.
      </p>

      <Feed />
    </section>
  );
};

export default Home;
