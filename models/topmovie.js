module.exports = (sequelize, DataTypes) => {
  const TopMovie = sequelize.define('TopMovie', {
    rank: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    IMDBId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER
    },
    genre: {
      type: DataTypes.STRING
    },
    posterUrl: {
      type: DataTypes.STRING(2048)
    }
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
  };

  return TopMovie;
};
