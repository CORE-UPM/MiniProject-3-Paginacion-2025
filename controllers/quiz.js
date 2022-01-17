const Sequelize = require("sequelize");
const {models} = require("../models");

const {paginate} = require('../helpers/paginate');

// GET /quizzes
exports.index = async (req, res, next) => {

    try {
        const count = await models.Quiz.count();

        const items_per_page = 10;

        // The page to show is given in the query
        const pageno = parseInt(req.query.pageno) || 1;

        // Create a String with the HTMl used to render the pagination buttons.
        // This String is added to a local variable of the res object.
        res.locals.paginate_control = paginate(count, items_per_page, pageno, req);

        const findOptions = {
            offset: items_per_page * (pageno - 1),
            limit: items_per_page
        };

        const quizzes = await models.Quiz.findAll(findOptions);

        res.render('quizzes/index.ejs', {quizzes});
    } catch (error) {
        next(error);
    }
};

