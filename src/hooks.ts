import type { Reroute } from '@sveltejs/kit';
import { deLocalizeUrl } from "$src/paraglide/runtime.js";

export const reroute: Reroute = (request) => {
  return deLocalizeUrl(request.url).pathname;
};