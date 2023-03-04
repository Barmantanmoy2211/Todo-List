const notFound = (req,res) => res.status(404).send('Route does Not exits')

module.exports = notFound