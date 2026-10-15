export const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

export async function submitToWeb3Forms(payload: Record<string, string>): Promise<boolean> {
  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        from_name: "Kafe con Propósito website",
        ...payload,
      }),
    });
    const data = await res.json();
    return data.success === true;
  } catch {
    return false;
  }
}
