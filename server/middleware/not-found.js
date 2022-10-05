// Miiddleware for handling page not found issues
const notFound = (req, res) => res.status(404).send('Route does not exist')

module.exports = notFound
