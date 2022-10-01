import { Box, useMantineColorScheme } from "@mantine/core";
import React, { useEffect, useState } from "react";

const LinkedinCard = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const [loadedJS, setloadedJS] = useState(false);
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    script.async = true;
    script.defer = true;

    document.body.appendChild(script);
    setloadedJS(true);

    return () => {
      document.body.removeChild(script);
      setloadedJS(false);
    };
  }, []);
  return (
    <div>
      {/* {colorScheme == "dark" ? (
        
      ) : (
        
      )} */}

      <Box
        sx={(theme) => ({
          overflow: "hidden",
          height: colorScheme != "dark" ? "0px" : "auto",
        })}
      >
        <div
          className="badge-base LI-profile-badge"
          data-locale="en_US"
          data-size="large"
          data-theme={"dark"}
          data-type="HORIZONTAL"
          data-vanity="owenopichka"
          data-version="v1"
        >
          <a
            className="badge-base__link LI-simple-link"
            style={{ display: loadedJS ? "none" : "inherit" }}
            href="https://www.linkedin.com/in/owenopichka?trk=profile-badge"
          >
            Owen Opichka
          </a>
        </div>
      </Box>

      <Box
        sx={(theme) => ({
          overflow: "hidden",
          height: colorScheme != "light" ? "0px" : "auto",
        })}
      >
        <div
          className="badge-base LI-profile-badge"
          data-locale="en_US"
          data-size="large"
          data-theme={"light"}
          data-type="HORIZONTAL"
          data-vanity="owenopichka"
          data-version="v1"
        >
          <a
            className="badge-base__link LI-simple-link"
            style={{ display: loadedJS ? "none" : "inherit" }}
            href="https://www.linkedin.com/in/owenopichka?trk=profile-badge"
          >
            Owen Opichka
          </a>
        </div>
      </Box>
    </div>
  );
};

export default LinkedinCard;
