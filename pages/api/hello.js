export default async function handleRequest(req, res) {
  try {
    res.status(200)
  } catch (error) {
    handleError(error, res)
  }
}
