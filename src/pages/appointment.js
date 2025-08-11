"use client";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import SEO from "../common/seo/Seo";
import { useEffect } from "react";

// Example list of states
const stateOptions = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Washington DC",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

// Example list of services
const servicesList = [
  "System Check",
  "Filters",
  "FREE Water Quality Consultation",
  "Water System Installation",
];

export default function AppointmentPage() {
  return (
    <>
      <SEO pageTitle={"Appointment Page"} canonical="https://www.cleanwaterprosllc.com/appointment" />
      <HeaderOne />
      <Breadcrumb
        heading="Appointment Page"
        currentPage="Appointment"
        banner="/assets/images/contact/banner.png"
        mobileBanner="/assets/images/contact/banner-mobile.webp"
      />
      <AppointmentForm />
      <FooterOne />
    </>
  );
}

const AppointmentForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const watchState = watch("state"); // Watch the state field

  // useEffect(() => {
  //   // console.log("Current State:", watchState);
  // }, [watchState]);

  const onSubmit = async (data) => {
    const formattedData = {
      ...data,
      services:
        data.services && data.services.length > 0
          ? data.services
          : ["Not Provided"],
    };

    // console.log("Data: ", formattedData);

    try {
      await toast.promise(
        axios.post("/api/send-email", {
          formType: "Appointment",
          formData: formattedData,
        }),
        {
          loading: "Sending appointment request...",
          success: "Appointment request sent successfully!",
          error: "Error sending appointment request",
        }
      );
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section className="contact-page-form">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <div className="contact-page-form__inner ">
              <h2 className="capitalize">
                Fill out the form below to schedule an appointment
              </h2>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="contact-page-form__form"
              >
                <div className="row">
                  {/* Name & Email */}
                  <div className="col-xl-6 col-lg-6">
                    <div className="contact-page-form__input-box">
                      <label>
                        Name <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-input"
                        {...register("name", { required: "Name is required" })}
                      />
                      {errors.name && (
                        <p className="error">{errors.name.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6">
                    <div className="contact-page-form__input-box">
                      <label>
                        Email <span className="required">*</span>
                      </label>
                      <input
                        type="email"
                        className="form-input"
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
                  {/* Phone & Street Address */}
                  <div className="col-xl-6 col-lg-6">
                    <div className="contact-page-form__input-box">
                      <label>
                        Phone <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-input"
                        {...register("phone", {
                          required: "Phone is required",
                          pattern: {
                            value: /^[0-9]*$/,
                            message: "Only numbers are allowed",
                          },
                        })}
                      />
                      {errors.phone && (
                        <p className="error">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6">
                    <div className="contact-page-form__input-box">
                      <label>
                        Street Address <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-input"
                        {...register("streetAddress", {
                          required: "Street Address is required",
                        })}
                      />
                      {errors.streetAddress && (
                        <p className="error">{errors.streetAddress.message}</p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="row">
                  {/* City & State */}
                  <div className="col-xl-6 col-lg-6">
                    <div className="contact-page-form__input-box">
                      <label>
                        City <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-input"
                        {...register("city", { required: "City is required" })}
                      />
                      {errors.city && (
                        <p className="error">{errors.city.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6">
                    <div className="">
                      <label>
                        State <span className="required">*</span>
                      </label>
                      <div className="select-box">
                        <select
                          className="wide"
                          {...register("state", {
                            required: "State is required",
                          })}
                        >
                          <option value="" disabled>
                            Select State
                          </option>
                          {stateOptions.map((state) => (
                            <option key={state} value={state}>
                              {state}
                            </option>
                          ))}
                        </select>
                      </div>
                      {errors.state && (
                        <p className="error">{errors.state.message}</p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="row">
                  {/* Zip Code */}
                  <div className="col-xl-6 col-lg-6">
                    <div className="contact-page-form__input-box">
                      <label>Zip Code</label>
                      <input
                        type="text"
                        className="form-input zip-input"
                        {...register("zipCode", {
                          pattern: {
                            value: /^[0-9]*$/,
                            message: "Only numbers are allowed",
                          },
                        })}
                      />
                      {errors.zipCode && (
                        <p className="error">{errors.zipCode.message}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Type of Service */}
                <div className="contact-page-form__input-box">
                  <label>Type of Service:</label>
                  <div className="checkbox-group">
                    {servicesList.map((service) => (
                      <label key={service}>
                        <input
                          type="checkbox"
                          value={service}
                          {...register("services")}
                        />{" "}
                        {service}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="contact-page-form__btn">
                  <button className="thm-btn" type="submit">
                    <span>Send</span>
                    <i className="liquid"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Styling */}
      <style jsx>{`
        .error {
          color: red;
          font-size: 12px;
          margin-top: 5px;
        }
        .required {
          color: red;
        }
        .checkbox-group {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
        .form-input {
          width: 100%;
          height: 62px;
          padding: 8px;
          border: none;
          border-radius: 5px;
          background: #f1f5f9;
          color: black;
        }
        .zip-input {
          width: 100%;
        }
        .select-box {
          width: 100%;
          height: 62px;
          background-color: white;
        }
        .wide {
          width: 100%;
          padding: 8px;
          border: none;
          border-radius: 5px;
          background: #f1f5f9;
          height: 65px;
          padding-left: 18px;
        }
        .capitalize {
          text-transform: capitalize;
          text-align: center;
          margin: 12px 0px;
        }
        .contact-page-form__btn {
          margin-top: 20px;
        }
        .thm-btn:hover {
          background-color: #005bb5;
        }
      `}</style>
    </section>
  );
};
