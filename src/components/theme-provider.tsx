"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
<<<<<<< HEAD
  return (
    <NextThemesProvider {...props}>
      {children}
    </NextThemesProvider>
  );
=======
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
>>>>>>> 7f14cc3b6acbbdf51ffc200d3d8d27084e350e05
}

