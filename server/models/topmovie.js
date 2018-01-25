'use strict';
module.exports = (sequelize, DataTypes) => {
    const TopMovie = sequelize.define('TopMovie', {
        rank: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        IMDBId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    });

    TopMovie.associate = (models) => {
        TopMovie.belongsTo(models.Reviewer, {
            foreignKey: 'reviewerId',
            onDelete: 'CASCADE',
        });
        TopMovie.belongsTo(models.Year, {
            foreignKey: 'yearId',
            onDelete: 'CASCADE',
        });
    }

    return TopMovie;
};