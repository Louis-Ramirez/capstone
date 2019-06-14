module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        id:{
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        username:{
            type: DataTypes.STRING,
            required: true
        },

        password:  {
            type: DataTypes.STIRING,
            required: true
        },

        imageUrl:{
            type: DataTypes.STRING ,
            required: true
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updated_at: DataTypes.DATE,
        deleted_at: DataTypes.DATE
    }, {
            // 'paranoid:true' means a deleted record (table row) will not be returned in future queries.
            // 'false' will return all deleted records that match the query w/ deletion timestamp 
            paranoid: true,
           // Will automatically set field option for all attributes to snake cased name.
          // Does not override attribute with field option already defined
            underscored: true
 });

 return User;

}
 