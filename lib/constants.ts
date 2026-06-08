export const WHATSAPP_NUMBER = "5493513000000";
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const SITE_URL = "https://phiperformancemarketing.com";
export const INSTAGRAM_URL = "https://instagram.com/phiperformance";
export const TIKTOK_URL = "https://tiktok.com/@phiperformance";

export function whatsappLink(message: string): string {
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
}
