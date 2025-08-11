"use client";
import Loader from "@/common/loader/Loader";
import { useBlogDetails } from "@/hooks/blogs/useGetBlogDetailsBySlug";
import { useRouter } from "next/router";

const BlogDetails = () => {
  const router = useRouter();
  const { slug } = router.query;

  const { data: blog, isLoading, isError } = useBlogDetails(slug);

  if (isLoading)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100%",
        }}
      >
        <Loader />
      </div>
    );
  if (isError || !blog)
    return (
      <p
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100%",
        }}
      >
        Blog post not found.
      </p>
    );

  return (
    <section
      className="blog-details"
      style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}
    >
      <div className="container">
        <div className="blog-details__left">
          {/* Blog Image */}
          {/* <div className="blog-details__img">
            <img
              src={blog?.featured_image || "/default-image.jpg"}
              alt={blog?.title?.rendered}
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <div className="blog-details__date">
              <p>
                {new Date(blog?.date).getDate()} <br />
                {new Date(blog?.date).toLocaleString("default", {
                  month: "short",
                })}
              </p>
            </div>
          </div> */}

          {/* Blog Title */}
          {/* <h1
            className="blog-details__title"
            dangerouslySetInnerHTML={{ __html: blog?.title?.rendered }}
          /> */}

          {/* Blog Content */}
          <div className="blog-details__content">
            <div
              dangerouslySetInnerHTML={{
                __html: blog?.content?.rendered || "No content available.",
              }}
            />
          </div>

          {/* Social Share Links */}
          <div className="blog-details__social-list">
            <a
              href="https://www.facebook.com/people/Clean-Water-Pros-LLC/61565018964527/"
              target="_blank"
            >
              <span className="icon-facebook"></span>
            </a>
            <a
              href="https://www.instagram.com/cleanwaterprosllc/"
              target="_blank"
            >
              <span className="icon-instagram"></span>
            </a>
            <a
              href="https://www.linkedin.com/company/clean-water-pro-s-llc/"
              target="_blank"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
