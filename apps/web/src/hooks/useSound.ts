import { createContext, useContext, useState } from "react";

export type SoundContextValue = {
  enabled: boolean;
  toggle: () => void;
};

const SoundContext = createContext<SoundContextValue | undefined>(undefined);

export function SoundProvider({ children }: { children: React.ReactNode }) {
  const [enabled, setEnabled] = useState(true);

  return (
    <SoundContext.Provider value={{ enabled, toggle: () => setEnabled((prev) => !prev) }}>
      {children}
    </SoundContext.Provider>
  );
}

export function useSound() {
  const value = useContext(SoundContext);
  if (!value) {
    throw new Error("useSound must be used within SoundProvider");
  }
  return value;
}
