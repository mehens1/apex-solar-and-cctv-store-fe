export const errorHandler = (error) => {
  if (!error) return "An unknown error occurred";

  if (error.response) {
      if (error.response.status === 422) {
          return error.response.data.message || "Validation error occurred";
      }

      return error.response.data?.message || "An error occurred";
  }

  if (typeof error === "object" && error.error) {
      return String(error.error);
  }

  if (typeof error === "string") {
      return error;
  }

  return "Something went wrong. Please try again.";
};
