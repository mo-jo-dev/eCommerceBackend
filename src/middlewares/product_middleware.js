const { errorResponse } = require('../utils/error_response')

function createValidator(req, res, next){
    if(!req.body.title){
        return res.status(400).json(errorResponse('Validation Error!! Missing Title in the incoming request!!', { message: 'Body received without Title' }))
    }

    if(!req.body.description){
        return res.json({
            success: false,
            data: {},
            message: 'Validation Error!! Missing description in the incoming request!!',
            error: {
                message:'Body received without description'
            }
        })
    }

    if(!req.body.price){
        return res.json({
            success: false,
            data: {},
            message: 'Validation Error!! Missing price in the incoming request!!',
            error: {
                message:'Body received without price'
            }
        })
    }

    if(!req.body.image){
        return res.json({
            success: false,
            data: {},
            message: 'Validation Error!! Missing image in the incoming request!!',
            error: {
                message:'Body received without image'
            }
        })
    }

    if(!req.body.category){
        return res.json({
            success: false,
            data: {},
            message: 'Validation Error!! Missing category in the incoming request!!',
            error: {
                message:'Body received without category'
            }
        })
    }

    next();
}

module.exports = {
    createValidator
}