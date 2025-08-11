"use client";
import { useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const ContactOne = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      services: [], // Store selected services properly
    },
  });

  // Array of services
  const servicesList = [
    "System Check",
    "Filters",
    "FREE Water Quality Consultation",
    // "Pipe Cleaning",
    "Water System Installation",
  ];

  // Watch selected services
  const selectedServices = watch("services", []);

  // Debugging: Show selected services in the console
  // useEffect(() => {
  //   console.log("Selected Services (Watch):", selectedServices);
  // }, [selectedServices]);

  const onSubmit = async (data) => {
    // console.log("Form Submitted Data:", data);

    try {
      await toast.promise(
        axios.post("/api/send-email", {
          formType: "Contact",
          formData: {
            ...data,
            services: selectedServices, // Ensure correct service names are sent
          },
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
    <section className="contact-one pd-120-0-120">
      <div
        className="contact-one__bg jarallax"
        data-jarallax
        data-speed="0.2"
        dataimgposition="50% 0%"
      ></div>
      <div
        className="contact-one__img wow slideInRight"
        data-wow-delay="500ms"
        data-wow-duration="2500ms"
      >
        <img
          src="/assets/images/about/about-us-section-2.webp"
          alt="About Us"
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-8">
            <div className="contact-one__form-box">
              <div className="section-title">
                <span className="section-title__tagline">Contact With Us</span>
                <h2 className="section-title__title">Write A Message</h2>
              </div>
              <form onSubmit={handleSubmit(onSubmit)} className="default-form2">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="input-box">
                      <input
                        type="text"
                        placeholder="Your Name"
                        {...register("name", { required: "Name is required" })}
                      />
                      {errors.name && (
                        <p className="error">{errors.name.message}</p>
                      )}
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="input-box">
                      <input
                        type="email"
                        placeholder="Your Email"
                        {...register("email", {
                          required: "Email is required",
                        })}
                      />
                      {errors.email && (
                        <p className="error">{errors.email.message}</p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-xl-12">
                    <div className="input-box">
                      <textarea
                        placeholder="Your Message"
                        {...register("message", {
                          required: "Message is required",
                        })}
                        cols={10}
                        rows={12} // Increased height
                      ></textarea>
                      {errors.message && (
                        <p className="error">{errors.message.message}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Services Checkboxes */}
                <div className="row">
                  <div className="col-xl-12">
                    <div className="input-box">
                      <label
                        className="checkbox-label"
                        style={{
                          color: "whitesmoke",
                        }}
                      >
                        Select Services:
                      </label>
                      <div className="services-checkboxes">
                        {servicesList.map((service, index) => (
                          <label key={index} className="checkbox-item">
                            <input
                              type="checkbox"
                              value={service}
                              {...register("services", {
                                validate: (value) =>
                                  value.length > 0 ||
                                  "At least one service is required",
                              })}
                            />
                            {service}
                          </label>
                        ))}
                      </div>
                      {errors.services && (
                        <p className="error">{errors.services.message}</p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="row align-items-center">
                  <div className="col-xl-12 text-center">
                    <div className="button-box">
                      <button className="thm-btn" type="submit">
                        <span>Confirm Appointment</span>
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

      {/* Custom CSS */}
      <style jsx>{`
        .error {
          color: red;
          font-size: 12px;
          margin-top: 5px;
        }

        textarea {
          padding: 15px;
        }

        .checkbox-label {
          font-weight: bold;
          margin-bottom: 10px;
          display: block;
        }

        .services-checkboxes {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
        }

        .checkbox-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 16px;
          font-weight: bold;
          color: white;
          background-color: transparent;
          border: 2px solid white;
          padding: 10px;
          border-radius: 5px;
          cursor: pointer;
        }

        .checkbox-item input {
          accent-color: white;
        }

        .checkbox-item:hover {
          background-color: rgba(255, 255, 255, 0.2);
        }

        .button-box {
          margin-top: 20px;
        }
      `}</style>
    </section>
  );
};

export default ContactOne;
