import client from "@/grapghql/client";
import { GET_FOOTER_DATA } from "@/grapghql/queries";

const fetchFooterData = async () => {
  try {
    const response = await client.query({
      query: GET_FOOTER_DATA,
      fetchPolicy: "no-cache",
    });
    return response.data;
  } catch (error) {
    console.log("error", error);
    return {};
  }
};

export { fetchFooterData };
