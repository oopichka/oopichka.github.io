import SiteLayout from "@/components/layout/SiteLayout";
import "@/styles/global.css";
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import { useEffect, useState } from "react";

type Props = {
  children: JSX.Element;
};

export default function App({ children }: Props) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("dark");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <SiteLayout>{children}</SiteLayout>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
