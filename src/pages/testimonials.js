"use client";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import SEO from "../common/seo/Seo";

export default function TestimonialsPage() {
  return (
    <>
      <SEO pageTitle={"Testimonials"} canonical="https://www.cleanwaterprosllc.com/testimonials" />
      <HeaderOne />
      <Breadcrumb
        heading="Testimonials"
        currentPage="Testimonials"
        banner="/assets/images/contact/banner.png"
        mobileBanner="/assets/images/contact/banner-mobile.webp"
      />
      <TestimonialsSection />
      <FooterOne />
    </>
  );
}

// Testimonials Section Component
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Xlex.the.menxce",
      date: "14. October, 2024",
      message:
        "My girlfriend and I recently had the pleasure of working with Jeff Wiedemann regarding a demonstration and presentation of a home water filtration system. Jeff was extremely pleasant and not pushy at all. I am disappointed that I cannot remember the name of the technician that did the installation because he was also very friendly and went above and beyond truly. We can tell a difference in our water quality and are very appreciative!",
    },
    {
      name: "Patrick N. Jr",
      date: "20. August, 2024",
      message: "10 out of 10 for customer satisfaction!",
    },
    {
      name: "Toi B.",
      date: "28. August, 2024",
      message: "Great customer service and easy to work with!",
    },
    {
      name: "DEREK P.",
      date: "13. November, 2024",
      message:
        "Everything about the whole process was and is top notch! The initial consultation was extremely informative and not pushy. The installation was fantastic, and we love the whole home system. Can highly recommend this group! Thank you!",
    },
    {
      name: "A.M",
      date: "27. November, 2024",
      message:
        "This company has impressed me! The representatives are so kind and professional. Any questions or concerns I have is handled IMMEDIATELY! That puts me at ease and has made me a loyal customer! The products we purchased are top notch. We noticed a positive difference in our water with the new system. I highly recommend this company and their products!!",
    },
    {
      name: "C.G.",
      date: "11. December, 2024",
      message:
        "Our water system has truly made a difference in our home. We moved to a new area 9 months ago, started noticing skin and scalp dryness had no idea it was the water. The consultation was eye-opening and since we’ve had the system installed we’ve noticed our issues subsided. The Pure & Gentle products included have also been great. We’ve used and will continue to use all the products. Definitely highly recommend their services.",
    },
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="section-title">What Our Customers Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <h3 className="testimonial-name">{testimonial.name}</h3>
              <p className="testimonial-date">{testimonial.date}</p>
              <p className="testimonial-message">{testimonial.message}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .testimonials-section {
          padding: 50px 0;
          text-align: center;
        }
        .section-title {
          font-size: 28px;
          margin-bottom: 20px;
        }
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
          max-width: 900px;
          margin: auto;
        }
        .testimonial-card {
          background: #f9f9f9;
          padding: 20px;
          border-radius: 10px;
          text-align: left;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
        }
        .testimonial-name {
          font-weight: bold;
          font-size: 18px;
        }
        .testimonial-date {
          font-size: 14px;
          color: #666;
          margin-bottom: 10px;
        }
        .testimonial-message {
          font-size: 16px;
          line-height: 1.5;
        }
      `}</style>
    </section>
  );
};
