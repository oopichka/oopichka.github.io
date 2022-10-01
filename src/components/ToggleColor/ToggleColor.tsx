import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { IconMoonStars, IconSun } from "@tabler/icons";
import React from "react";

const ToggleColor = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <ActionIcon
      variant="outline"
      color={colorScheme != "dark" ? "yellow" : "blue"}
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme"
    >
      {colorScheme != "dark" ? (
        <IconSun size={18} />
      ) : (
        <IconMoonStars size={18} />
      )}
    </ActionIcon>
  );
};

export default ToggleColor;
