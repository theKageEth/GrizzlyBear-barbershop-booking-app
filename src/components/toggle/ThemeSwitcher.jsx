"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Switch } from "@nextui-org/react";
import { BsSun } from "react-icons/bs";
import { GoMoon } from "react-icons/go";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Switch
      defaultSelected={theme === "dark"}
      size="lg"
      color="secondary"
      onChange={toggleTheme}
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <BsSun className={className} />
        ) : (
          <GoMoon className={className} />
        )
      }
    />
  );
}
