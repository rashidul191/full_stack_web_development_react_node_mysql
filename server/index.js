const app = require("./app");
const db = require("./models");
const port = 5000;


// default error handler

const errorHandler = (err, req, res, next) => {
  if(req.headersSent){
    return next(err);
  }
  res.status(500).json({ error: err });
};

app.use(errorHandler);


db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`App is running on port: ${port}`);
  });
});
