import { useEffect, useState } from "react";
import { fetchResume } from "../lib/apiClient";

export type ResumeData = {
  levelId: string;
  lastProblemId: string;
};

export function useResume(userId: string | null) {
  const [data, setData] = useState<ResumeData | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!userId) return;
    setLoading(true);
    fetchResume(userId)
      .then(setData)
      .finally(() => setLoading(false));
  }, [userId]);

  return { data, loading } as const;
}
