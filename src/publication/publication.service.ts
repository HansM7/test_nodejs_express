export function createPublicationService(data: any) {
  const { title, content } = data;

  return {
    statusCode: 200,
    success: true,
    message: "Publication created successfully",
    data,
  };
}
