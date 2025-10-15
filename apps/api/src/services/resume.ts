export type ResumeData = {
  levelId: string;
  lastProblemId: string;
};

export function getResume(userId: string): ResumeData | null {
  return userId ? { levelId: "L01", lastProblemId: "0001" } : null;
}
