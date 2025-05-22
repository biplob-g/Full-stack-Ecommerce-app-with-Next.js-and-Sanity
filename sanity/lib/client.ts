import { createClient } from "next-sanity";
// import { dataset, projectId } from "../env";

export const client = createClient({
  projectId: "ml92tbwq",
  dataset: "production",
  apiVersion: "2024-03-20",
  useCdn: false,
  perspective: "published",
});
