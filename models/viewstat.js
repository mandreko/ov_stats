module.exports = (sequelize, DataTypes) => {
  const ViewStat = sequelize.define('ViewStat', {
    totalViews: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    theaterViews: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    newViews: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });

  ViewStat.associate = (models) => {
    ViewStat.belongsTo(models.Reviewer, {
      foreignKey: 'reviewerId',
      onDelete: 'CASCADE',
    });
    ViewStat.belongsTo(models.Year, {
      foreignKey: 'yearId',
      onDelete: 'CASCADE',
    });
  };

  return ViewStat;
};
