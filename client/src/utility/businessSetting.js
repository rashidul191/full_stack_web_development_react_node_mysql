// utility/settings.js
import api from "../api/axios";

/**
 * Fetch all business settings from backend
 * @returns {Promise<Object>} key-value object
 */
export const getBusinessSettings = async () => {
  try {
    const res = await api.get("/admin/business-setting"); // backend route
    if (res.data?.status === "success") {
      // backend থেকে array আসছে [{key, value}, ...]
      const dataArray = res?.data?.data || [];

      // convert array -> object { key: value }
      const settingsObj = {};
      dataArray.forEach((item) => {
        settingsObj[item.key] = item.value;
      });

    //   console.log("Mapped business settings: ", settingsObj);
      return settingsObj; // এখন key-value format
    }
    return {};
  } catch (error) {
    console.log("Failed to fetch business settings", error);
    return {};
  }
};
