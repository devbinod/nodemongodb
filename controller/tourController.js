let Tour = require('../models/tourModel');


exports.getAllTour= async (req,resp) => {

        try{

            let tourList = await Tour.find();

            resp.status(200)
                .json({
                    message: 'success',
                    results : tourList.length,
                    data: {
                        tours: tourList
                    }
                })
        }catch(err) {
            resp.status(500).json({
                message: 'fail',
                results: err
            });
        }

}




exports.saveTour= async (req,resp) => {
   try{
    const newTour = await Tour.create(req.body);
    resp.status(201).json({
        status : 'success',
        data: {
            tour: newTour
        } 
    });
   }catch(err) {
        resp.status(400).json({
            status: 'fail',
            message: err
        })
   }

}


exports.getSingleTour = async (req,resp) => {

    try{

            let tour = await Tour.findById(req.params.id)
            resp.status(200)
                .json({
                    message: 'success',
                    data: {
                        tour: tour
                    }
                })

    }catch(error){
        resp.status(500)
            .json({
                message: 'fail',
                results: error
            })
    }
}


exports.updateTour = async (req,resp) => {


    try{

        let tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            returnValidators : true
        });

        resp.status(200)
            .json({
                message: 'success',
                data: {
                    tour: tour
                }
            })
    }catch(err) {
        resp.status(400)
        .json({
            result: 'fail',
            status: {
                data: err
            }
        });
    }

  
}


exports.deletedTour = async (req,resp) => {


    try{
        await Tour.findByIdAndDelete(req.params.id);

        resp.status(200).json({
            message: 'success',
            data: null
        });


    }catch(err) {
        resp.status(400)
        .json({
            result: 'fail',
            status: {
                data: err
            }
        });
    }

}
