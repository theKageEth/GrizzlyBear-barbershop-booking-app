"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Switch } from "@nextui-org/react";
import { BsSun } from "react-icons/bs";
import { GoMoon } from "react-icons/go";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Switch
      defaultSelected={theme === "dark"}
      size="sm"
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
