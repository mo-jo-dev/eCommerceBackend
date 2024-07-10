

const create = (req, res) => {
    try {
        
        // Some db processing

        return res.json({
            success: true,
            error: {},
            message: 'Successfull Created Product',
            data: {
                id: Math.random() * (100),
                title: '',
                description: '',
                category: '',
                price: '',
                image: ''
            }
        })

    } catch (error) {
        console.log("Something went wrong in the controller layer!!");
        return res.json({message: 'Something went wrong in the controller layer!!'});
    }
}

module.exports = {
    create
}; 