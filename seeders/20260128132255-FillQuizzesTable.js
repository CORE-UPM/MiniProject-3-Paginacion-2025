'use strict';

const Sequelize = require("sequelize");
const path = require("path");
module.exports = {
    up: async (queryInterface, Sequelize) => {

        const sequelize = queryInterface.sequelize;

        // Model definition: Quiz
        const Quiz = require("../models/quiz")(sequelize, Sequelize.DataTypes);

        for (let i = 0; i < 45; i++) {
            await Quiz.create({
                question: `How much is 2 times ${i}?`,
                answer: `${2 * i}`
            });
        }
    },

    down: async (queryInterface, Sequelize) => {

        await queryInterface.bulkDelete('Quizzes', null, {});
    }
};
