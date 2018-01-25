'use strict';
module.exports = (sequelize, DataTypes) => {
    const ViewStat = sequelize.define('ViewStat', {
        totalViews: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        theaterViews: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        newViews: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
    });

    return ViewStat;
};