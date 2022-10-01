import { Box, useMantineColorScheme } from "@mantine/core";
import React from "react";

const SiteLayout = ({ children }: any) => {
  //   const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  //   const dark = colorScheme === "dark";

  return (
    <Box
      sx={(theme) => ({
        height: "100vh",
        // backgroundColor: theme.colorScheme == "dark" ? "black" : "white",
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[7]
            : theme.colors.gray[1],
        color: theme.colorScheme == "dark" ? "white" : "black",
        padding: "1em",
      })}
    >
      {children}
    </Box>
  );
};

export default SiteLayout;
