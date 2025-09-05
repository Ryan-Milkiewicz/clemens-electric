import Link from "next/link";
import DateComponent from "./Date";

const Post = ({ post }: { post: any }) => {
  const { _id, title, slug, excerpt, date } = post;

  return (
    <article key={_id} className="card">
      <div className="card-body">
        <h4 className="card-title fw-bold">{title}</h4>
        <p className="card-text">{excerpt}</p>
        <div className="mt-auto">
          <Link
            href={`/blog/${slug}`}
            className="w-100"
            style={{ color: "#e21919" }}
          >
            Read this post
          </Link>
        </div>
      </div>
      <div className="card-footer text-center">
        <small className="text-body-secondary">
          <DateComponent dateString={date} />
        </small>
      </div>
    </article>
  );
};

const Posts = ({
  children,
  heading,
}: {
  children: React.ReactNode;
  heading?: string;
}) => (
  <div>
    {heading && <h2 className="mb-4 fw-bold redUnderline">{heading}</h2>}
    <div>{children}</div>
  </div>
);

export const AllPosts = ({ data }: { data: any }) => {
  return (
    <Posts heading="Blog Posts">
      {data.map((post: any) => (
        <Post key={post._id} post={post} />
      ))}
    </Posts>
  );
};
