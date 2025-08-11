import React from "react";
import Link from "next/link";
import { BlogStandardData } from "@/data/blog";
import BlogSearch from "../widgets/BlogSearch";
import BlogCategory from "../widgets/BlogCategory";
import BlogLatestPost from "../widgets/BlogLatestPost";
import BlogQuery from "../widgets/BlogQuery";
import BlogTags from "../widgets/BlogTags";

const BlogStandard = () => {
  return (
    <>
      <section className="blog-standard">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="blog-standard__left">
                {BlogStandardData.map((item, i) => (
                  <div key={i} className="blog-standard__single">
                    <div className="blog-standard__single-img">
                      <img src={item.image} alt={item.alt} />
                      <div className="blog-standard__date">
                        <p>{item.date}</p>
                      </div>
                    </div>
                    <div className="blog-standard__single-content">
                      <ul className="meta-info">
                        <li>
                          <span className="icon-user"></span>
                          <a href="#">{item.author}</a>
                        </li>
                        <li>
                          <span className="icon-wall-clock"></span>
                          <a href="#">{item.comment}</a>
                        </li>
                      </ul>
                      <h2>
                        <Link href={item.link}>{item.heading}</Link>
                      </h2>
                      <p>{item.description}</p>
                      <div className="btn-box">
                        <Link href={item.link}>
                          Read More <span className="icon-plus"></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Start Styled Pagination */}
                <div className="row">
                  <div className="col-xl-12">
                    <ul className="styled-pagination clearfix">
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
                {/* Start Styled Pagination */}
              </div>
            </div>

            <div className="col-xl-4 col-lg-5">
              <div className="sidebar">
                <BlogSearch />
                <BlogCategory />
                <BlogLatestPost />
                <BlogQuery />
                <BlogTags />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogStandard;
