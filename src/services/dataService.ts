
import { Product } from "@/types";

// Mock data until Supabase integration
export const fetchProducts = async (): Promise<Product[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  return [
    {
      id: 1,
      name: "Zoom",
      countryOfOrigin: "USA",
      countryCode: "US",
      alternatives: [
        { id: 101, name: "Jitsi Meet", countryOfOrigin: "Germany", countryCode: "DE" },
        { id: 102, name: "BigBlueButton", countryOfOrigin: "Canada", countryCode: "CA" }
      ]
    },
    {
      id: 2,
      name: "Microsoft Office",
      countryOfOrigin: "USA",
      countryCode: "US",
      alternatives: [
        { id: 201, name: "LibreOffice", countryOfOrigin: "Germany", countryCode: "DE" },
        { id: 202, name: "OnlyOffice", countryOfOrigin: "Latvia", countryCode: "LV" }
      ]
    },
    {
      id: 3,
      name: "Wix",
      countryOfOrigin: "Israel",
      countryCode: "IL",
      alternatives: [
        { id: 301, name: "WordPress", countryOfOrigin: "USA", countryCode: "US" },
        { id: 302, name: "Webflow", countryOfOrigin: "USA", countryCode: "US" }
      ]
    },
    {
      id: 4,
      name: "GitHub",
      countryOfOrigin: "USA",
      countryCode: "US",
      alternatives: [
        { id: 401, name: "GitLab", countryOfOrigin: "Netherlands", countryCode: "NL" },
        { id: 402, name: "Bitbucket", countryOfOrigin: "Australia", countryCode: "AU" }
      ]
    },
    {
      id: 5,
      name: "Slack",
      countryOfOrigin: "USA",
      countryCode: "US",
      alternatives: [
        { id: 501, name: "Mattermost", countryOfOrigin: "USA", countryCode: "US" },
        { id: 502, name: "Element", countryOfOrigin: "UK", countryCode: "GB" }
      ]
    },
    {
      id: 6,
      name: "Adobe Photoshop",
      countryOfOrigin: "USA",
      countryCode: "US",
      alternatives: [
        { id: 601, name: "GIMP", countryOfOrigin: "Global OSS", countryCode: "XX" },
        { id: 602, name: "Affinity Photo", countryOfOrigin: "UK", countryCode: "GB" }
      ]
    },
    {
      id: 7,
      name: "Monday.com",
      countryOfOrigin: "Israel",
      countryCode: "IL",
      alternatives: [
        { id: 701, name: "Asana", countryOfOrigin: "USA", countryCode: "US" },
        { id: 702, name: "ClickUp", countryOfOrigin: "USA", countryCode: "US" }
      ]
    }
  ];
};
