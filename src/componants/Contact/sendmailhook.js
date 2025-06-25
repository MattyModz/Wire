export default async function fetchmail(formValues) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/sendmail`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    });

    if (response.ok) {
      const data = await response.json();
      return {
        success: true,
        message: data.message || "Message Sent Successfully",
      };
    } else {
      console.error("Unexpected response status:", response.status);
      return { success: false, message: "Unexpected response status" };
    }
  } catch (error) {
    console.error("Error during API request:", error.message);
    return {
      success: false,
      message: "Something went wrong, please try again",
    };
  }
}
