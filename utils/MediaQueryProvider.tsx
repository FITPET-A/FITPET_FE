import useClientMediaQuery from "@hooks/useClientMediaQuery";
import React, { createContext, useContext, useMemo } from "react";

interface MediaQueryContextProps {
  isDesktop: boolean | null;
  isTablet: boolean | null;
}

const MediaQueryContext = createContext<MediaQueryContextProps>({
  isDesktop: null,
  isTablet: null,
});

export function MediaQueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const isDesktop = useClientMediaQuery("(min-width: 1080px)");
  const isTablet = useClientMediaQuery("(min-width: 767px)");

  const value = useMemo(() => ({ isDesktop, isTablet }), [isDesktop, isTablet]);

  return (
    <MediaQueryContext.Provider value={value}>
      {children}
    </MediaQueryContext.Provider>
  );
}

export function useMediaQuery() {
  return useContext(MediaQueryContext);
}
