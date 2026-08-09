import { supabase } from "./supabase";

const SESSION_KEY = "admin_session";
const SESSION_DURATION = 24 * 60 * 60 * 1000; // 24 hours

// Hash password using SHA-256 (Web Crypto API)
async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

// Verify password against stored hash in Supabase
export async function verifyPassword(password: string): Promise<boolean> {
  const hash = await hashPassword(password);

  const { data, error } = await supabase
    .from("admin_settings")
    .select("password_hash")
    .limit(1)
    .single();

  if (error) {
    console.error("Supabase Error:", error);
    return false;
  }
  if (!data) {
    console.error("No data returned from Supabase");
    return false;
  }
  
  console.log("Input hash:", hash);
  console.log("DB hash:", data.password_hash);
  
  return data.password_hash === hash;
}

// Session management
export function setSession(): void {
  const session = {
    token: crypto.randomUUID(),
    expiresAt: Date.now() + SESSION_DURATION,
  };
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
}

export function getSession(): boolean {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    if (!raw) return false;
    const session = JSON.parse(raw);
    if (Date.now() > session.expiresAt) {
      clearSession();
      return false;
    }
    return true;
  } catch {
    return false;
  }
}

export function clearSession(): void {
  localStorage.removeItem(SESSION_KEY);
}
