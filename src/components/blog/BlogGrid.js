import React from "react";
import Link from "next/link";
import { BlogGridData } from "@/data/blog";

const BlogGrid = () => {
  return (
    <>
      <section className="blog-one blog-one--blog blog-one--blog--grid">
        <div className="container">
          <div className="row">
            {BlogGridData.map((item, i) => (
              <div
                key={i}
                className="col-xl-4 col-lg-4 wow fadeInUp"
                data-wow-delay={item.delay}
              >
                <div className="blog-one__single">
                  <div className="blog-one__single-img">
                    <img src={item.image} alt={item.alt} />
                    <div className="overlay-icon">
                      <Link href={item.link}>
                        <span className="icon-plus"></span>
                      </Link>
                    </div>
                  </div>
                  <div className="blog-one__content">
                    <div className="blog-one__content-bg"></div>
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
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Start Styled Pagination */}
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
          {/* Start Styled Pagination */}
        </div>
      </section>
    </>
  );
};

export default BlogGrid;
