module.exports = (sequelize, DataTypes) => {
  const Reviewer = sequelize.define('Reviewer', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    twitterHandle: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    letterboxdHandle: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  Reviewer.associate = (models) => {
    Reviewer.hasMany(models.TopMovie, {
      foreignKey: 'reviewerId',
      as: 'topMovies',
    });
  };

  Reviewer.associate = (models) => {
    Reviewer.hasMany(models.ViewStat, {
      foreignKey: 'reviewerId',
      as: 'viewStats',
    });
  };

  return Reviewer;
};
