export type AuthSession = {
  userId: string;
  token: string;
};

export async function signInWithGoogle(): Promise<AuthSession> {
  // Firebase Auth 連携のプレースホルダー
  return {
    userId: "demo-user",
    token: "dummy-token",
  };
}
