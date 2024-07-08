

const ping = (req, res) => {
    try {
        return res.json({
            message: 'everything fine!!'
        })
    } catch (error) {
        return res.json({
            message: 'error!!'
        })
    }
}

module.exports = {
    ping
}