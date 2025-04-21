import client from "@/grapghql/client";
import { GET_HOMEPAGE_DATA } from "@/grapghql/queries";

const fetchHomePageData = async () => {
  try {
    const response = await client.query({
      query: GET_HOMEPAGE_DATA,
      fetchPolicy: "no-cache",
    });
    return response.data;
  } catch (error) {
    console.error("Failed to fetch homepage data:");
    console.log("error", error);
    return {};
  }
};

export { fetchHomePageData };
