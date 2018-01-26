'use strict';
module.exports = (sequelize, DataTypes) => {
    const Year = sequelize.define('Year', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    });

    Year.associate  = (models) => {
        Year.hasMany(models.TopMovie, {
            foreignKey: 'yearId',
            as: 'topMovies'
        });
    };

    Year.associate  = (models) => {
        Year.hasMany(models.ViewStat, {
            foreignKey: 'yearId',
            as: 'viewStats'
        });
    };

    return Year;
};