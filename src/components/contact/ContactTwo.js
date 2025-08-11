"use client";
import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const ContactTwo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await toast.promise(
        axios.post("/api/send-email", {
          formType: "Contact",
          formData: data,
        }),
        {
          loading: "Sending message...",
          success: "Message sent successfully!",
          error: "Error sending message",
        }
      );
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <section className="contact-page-form">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="contact-page-form__inner">
                <div className="section-title text-center">
                  <span className="section-title__tagline">
                    Connect With Us Now
                  </span>
                  <h2 className="section-title__title">
                    Feel Free to Write to Our <br />
                    Experts
                  </h2>
                </div>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="contact-page-form__form"
                >
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                      <div className="contact-page-form__input-box">
                        {errors.name && (
                          <p className="error">{errors.name.message}</p>
                        )}
                        <input
                          type="text"
                          placeholder="Your Name"
                          {...register("name", {
                            required: "Name is required",
                          })}
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                      <div className="contact-page-form__input-box">
                        {errors.phone && (
                          <p className="error">{errors.phone.message}</p>
                        )}
                        <input
                          type="text"
                          placeholder="Phone Number"
                          {...register("phone", {
                            required: "Phone number is required",
                            pattern: {
                              value: /^[0-9]+$/,
                              message: "Only numbers are allowed",
                            },
                          })}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                      <div className="contact-page-form__input-box">
                        {errors.email && (
                          <p className="error">{errors.email.message}</p>
                        )}
                        <input
                          type="email"
                          placeholder="Email Address"
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value:
                                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                              message: "Invalid email format",
                            },
                          })}
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                      <div className="contact-page-form__input-box">
                        {errors.subject && (
                          <p className="error">{errors.subject.message}</p>
                        )}
                        <input
                          type="text"
                          placeholder="Subject"
                          {...register("subject", {
                            required: "Subject is required",
                          })}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                      <div className="contact-page-form__input-box">
                        {errors.message && (
                          <p className="error">{errors.message.message}</p>
                        )}
                        <textarea
                          placeholder="Message"
                          {...register("message", {
                            required: "Message is required",
                          })}
                        ></textarea>
                      </div>
                      <div className="contact-page-form__btn">
                        <button className="thm-btn" type="submit">
                          <span>Message Us</span>
                          <i className="liquid"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Error Styling */}
      <style jsx>{`
        .error {
          color: red;
          font-size: 12px;
        }
      `}</style>
    </>
  );
};

export default ContactTwo;
