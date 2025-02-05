
const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');
const User = require('./user.model');

const Hearts = sequelize.define('Hearts', {
  heart_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  remaining_hearts: {
    type: DataTypes.INTEGER,
    defaultValue: 5,
  },
  last_recharge: {
    type: DataTypes.DATE,
    allowNull: true,
  },
}, {
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
});

// // Relationships
// Hearts.belongsTo(User, { foreignKey: 'user_id' });

module.exports = Hearts;
