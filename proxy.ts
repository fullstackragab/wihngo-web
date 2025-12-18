import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

// Next.js 16: renamed from middleware to proxy
const proxy = createMiddleware(routing);
export default proxy;

export const config = {
  // Match all pathnames except for
  // - API routes
  // - _next (Next.js internals)
  // - Static files (images, fonts, etc.)
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
