import Image from "next/image";
import { getHeaderSection, getBlogPosts } from "../lib/queries";
import { urlFor } from "@/sanity/sanityImageUrl";
import { BlogCard } from "./components/BlogCard";
import { HeroSection } from "@/lib/types";

export default async function Home() {
  const { _id, headerTitle, altText, image } = await getHeaderSection();
  const blogData = await getBlogPosts();

  return (
    <>
      <section className="position-relative">
        <div key={_id}>
          <Image
            style={{ objectFit: "cover", width: "100%" }}
            src={urlFor(image).width(966).height(646).url()}
            alt={altText}
            width={966}
            height={646}
            priority
          />
          <div
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          />
          <div
            className="position-absolute top-50 start-50 translate-middle text-center"
            style={{ color: "white" }}
          >
            <h1 className="fw-bold">{headerTitle}</h1>
          </div>
        </div>
      </section>
      <section className="container py-5">
        <h2 className="fw-bold mb-5 text-center">
          <span className="redUnderline">Latest Blog Posts</span>
        </h2>
        <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
          {blogData.map(
            (blog: {
              title: string;
              slug: string;
              alt: string;
              excerpt: string;
              date: string;
              coverImage: string;
            }) => (
              <div className="col" key={blog.slug}>
                <BlogCard
                  title={blog.title}
                  slug={blog.slug}
                  //alt={blog.coverImage.alt}
                  excerpt={blog.excerpt}
                  date={blog.date}
                  image={blog.coverImage}
                />
              </div>
            )
          )}
        </div>
      </section>
    </>
  );
}
