import type { ResumeData } from "../hooks/useResume";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE ?? "http://localhost:3001";

export async function fetchResume(userId: string): Promise<ResumeData | null> {
  const response = await fetch(`${API_BASE}/progress/${userId}`);
  if (!response.ok) {
    return null;
  }
  return response.json();
}
