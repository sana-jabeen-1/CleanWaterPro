"use client";
import Loader from "@/common/loader/Loader";
import useGetAllBlogs from "@/hooks/blogs/useGetAllBlogs";
import Link from "next/link";
import { useEffect } from "react";

const BlogOne = () => {
  const { data: blogs, isLoading, error } = useGetAllBlogs();
  // console.log(blogs);

  useEffect(() => {
    if (typeof window !== "undefined" && $(".blog-one__carousel").length) {
      $(".blog-one__carousel").owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        smartSpeed: 500,
        autoHeight: false,
        autoplay: true,
        dots: true,
        autoplayTimeout: 10000,
        navText: [
          '<span className="icon-left-arrow"></span>',
          '<span className="icon-right-arrow"></span>',
        ],
        responsive: {
          0: { items: 1 },
          600: { items: 1 },
          800: { items: 2 },
          1024: { items: 3 },
          1200: { items: 3 },
        },
      });
    }
  }, [blogs]);

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
  if (error)
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
        Error fetching blogs
      </p>
    );

  return (
    <section className="blog-one blog-one--blog">
      <div className="container">
        <div className="section-title text-center">
          <span className="section-title__tagline">Our Blog</span>
          <h2 className="section-title__title">Latest News & Articles</h2>
        </div>
        <div className="row">
          {blogs?.map((blog) => (
            <div
              key={blog.id}
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="blog-one__single">
                {/* <div className="blog-one__single-img">
                  <img
                    src={blog.image || "/default-image.jpg"}
                    alt={blog.title?.rendered}
                  />
                  <div className="overlay-icon">
                    <Link href={`/blog/${blog.id}`}>
                      <span className="icon-plus"></span>
                    </Link>
                  </div>
                </div> */}
                <div className="blog-one__content">
                  <ul className="meta-info">
                    <li>
                      <span className="icon-user"></span>
                      <a href="#">{blog.author || "Admin"}</a>
                    </li>
                    <li>
                      <span className="icon-wall-clock"></span>
                      <a href="#">{new Date(blog.date).toDateString()}</a>
                    </li>
                  </ul>
                  <h2>
                    <Link
                      href={`/blog/${blog.slug}`}
                      dangerouslySetInnerHTML={{ __html: blog.title?.rendered }}
                    />
                  </h2>
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        blog.excerpt?.rendered || "No description available.",
                    }}
                  />
                  <div className="btn-box">
                    <Link href={`/blog/${blog.slug}`}>
                      Read More <span className="icon-plus"></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="row">
          <div className="col-xl-12">
            <ul className="styled-pagination text-center clearfix">
              <li className="prev">
                <a href="#">
                  <span className="fa fa-angle-double-left"></span>
                </a>
              </li>
              <li>
                <a href="#" className="active">
                  1
                </a>
              </li>
              <li>
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li className="next">
                <a href="#">
                  <span className="fa fa-angle-double-right"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogOne;
