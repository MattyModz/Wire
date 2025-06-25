// Any random string, must match SANITY_PREVIEW_SECRET in the Next.js .env.local file
const SANITY_PREVIEW_SECRET = "pYIczywtrU";

// Replace `remoteUrl` with your deployed Next.js site
const remoteUrl = `https://www.mikewire-electrical.co.uk`;
const localUrl = `http://localhost:3000`;
const baseUrl = window.location.hostname === "localhost" ? localUrl : remoteUrl;

const previewUrl = new URL(baseUrl);

export default function resolveProductionUrl(doc) {
  switch (doc._type) {
    case "post":
      return `${previewUrl}/api/preview?secret=${SANITY_PREVIEW_SECRET}&slug=post/${doc.slug.current}`;
  }
}
