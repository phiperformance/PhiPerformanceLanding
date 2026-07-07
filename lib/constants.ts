export const WHATSAPP_NUMBER = "5493513664321";
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const SITE_URL = "https://www.phiperformancemarketing.com";
export const INSTAGRAM_URL = "https://www.instagram.com/phi.performance.marketing/";
export const TIKTOK_URL = "https://www.tiktok.com/@phiperformancemarketing";

export function whatsappLink(message: string): string {
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
}
