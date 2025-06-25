import {
  createCurrentUserHook,
  createClient,
  createPreviewSubscriptionHook,
} from "next-sanity";

import imageUrlBuilder from "@sanity/image-url";

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: "2021-03-25",

  useCdn: process.env.NODE_ENV === "production",
};

//set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config);

// Helper function for using the current logged in account
export const urlFor = (source) => imageUrlBuilder(config).image(source);

export const usePreviewSubscription = createPreviewSubscriptionHook(config);

// Helper function for using the current logged in user account
export const useCurrentUser = createCurrentUserHook(config);

export const previewClient = createClient({
  ...config,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

// Helper function for easily switching between normal client and preview client
export const getClient = (usePreview) =>
  usePreview ? previewClient : sanityClient;
