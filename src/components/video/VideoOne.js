import { useEffect, useRef, useState } from "react";

const VideoOne = () => {
  const buttonRef1 = useRef(null);
  const buttonRef2 = useRef(null);
  const [thumbnail2, setThumbnail2] = useState(null);

  // Function to handle video play and button visibility
  const handleVideoPlay = (videoId, buttonRef) => {
    const video = document.getElementById(videoId);
    if (video.paused) {
      video.play();
      buttonRef.current.style.visibility = "hidden";
    } else {
      video.pause();
      buttonRef.current.style.visibility = "visible";
    }
  };

  // Function to capture a frame and set the thumbnail for Video 2, skipping the first 2 seconds
  const captureThumbnail = (videoId, setThumbnail) => {
    const video = document.getElementById(videoId);

    // Skip the first 2 seconds (you can adjust this as needed)
    video.currentTime = 2;

    // Wait for the video to reach the currentTime
    video.onseeked = () => {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");

      // Set canvas size to video size
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      // Draw the current video frame to the canvas
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      // Convert the canvas to a data URL (base64 encoded image)
      const dataUrl = canvas.toDataURL();
      setThumbnail(dataUrl); // Set it as a state variable
    };
  };

  useEffect(() => {
    // Capture the thumbnail for Video 2 (not Video 1)
    captureThumbnail("myVideo2", setThumbnail2);
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textTransform: "capitalize",
        }}
      >
        <h3
          style={{
            textAlign: "center",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            marginTop: "3rem",
            width: "clamp(70%, 80%, 90%)",
            marginBottom: "clamp(-120px, -10vw, -60px)",
          }}
        >
          See what the EPA says is in your water, why wait to have safe drinking
          water
        </h3>
      </div>

      <section className="video-one">
        {/* Video 1 */}
        <div
          className="container"
          data-jarallax
          data-speed="0.2"
          style={{
            position: "relative",
            marginBottom: "2rem",
          }}
        >
          <video
            id="myVideo1"
            width="100%"
            height="100%"
            controls={false}
            playsInline
            preload="auto"
            onClick={() => handleVideoPlay("myVideo1", buttonRef1)}
            style={{
              borderRadius: "15px",
            }}
          >
            <source
              src="https://res.cloudinary.com/drjitbx94/video/upload/v1745511752/Clean_Water_Pros_ONLINE_1_pcngps.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 1,
            }}
          >
            <div className="video-one__inner">
              <div className="video-one__video-link">
                <div
                  className="video-one__video-icon"
                  onClick={() => handleVideoPlay("myVideo1", buttonRef1)}
                  ref={buttonRef1}
                >
                  <span className="fa fa-play"></span>
                  <i className="ripple"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video 2 */}
        <div
          className="container"
          data-jarallax
          data-speed="0.2"
          style={{
            backgroundImage: thumbnail2 ? `url(${thumbnail2})` : "",
            position: "relative",
          }}
        >
          <video
            id="myVideo2"
            width="100%"
            height="100%"
            controls={false}
            playsInline
            preload="auto"
            onClick={() => handleVideoPlay("myVideo2", buttonRef2)}
            style={{
              borderRadius: "15px",
            }}
          >
            <source
              src="https://res.cloudinary.com/drjitbx94/video/upload/v1745512157/Microplastic_hvpta4.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 1,
            }}
          >
            <div className="video-one__inner">
              <div className="video-one__video-link">
                <div
                  className="video-one__video-icon"
                  onClick={() => handleVideoPlay("myVideo2", buttonRef2)}
                  ref={buttonRef2}
                >
                  <span className="fa fa-play"></span>
                  <i className="ripple"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoOne;
