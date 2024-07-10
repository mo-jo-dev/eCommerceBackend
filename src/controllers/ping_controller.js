

const pingV1 = (req, res) => {
    try {
        return res.json({
            message: 'everything fine with PING Version 1!!'
        })
    } catch (error) {
        return res.json({
            message: 'error in Version 1!!'
        })
    }
}

const pingV2 = (req, res) => {
    try {
        return res.json({
            message: 'everything fine with PING Version 2!!'
        })
    } catch (error) {
        return res.json({
            message: 'error in Version 2!!'
        })
    }
}

module.exports = {
    pingV1, pingV2
}