module.exports = (mongoose, mongoosePaginate) => {
  var schema = mongoose.Schema(
    {
      name: String,
      email: String,
      userName:String,
      password:String,
    },
    { timestamps: true }
  );

  schema.plugin(mongoosePaginate);

  const User = mongoose.model("user", schema);
  return User;
};