const Complete = require ('../models/Complete')

async function show(req, res) {
    try {
        const achievements = await Complete.findByHabitId(parseInt(req.params.id))
        console.log("testing")
        res.status(200).json(achievements)

    } catch (err) {
        res.status(404).json({err})
    }
}
module.exports = { show }
