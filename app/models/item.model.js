module.exports = (sequelize, Sequelize) => {
    const Factory = sequelize.define("items", {
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      adress: {
        type: Sequelize.INTEGER
      },
      phone_number: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Item;
  };