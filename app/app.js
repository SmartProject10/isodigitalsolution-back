require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();

// Conectar a la base de datos
async function connectToMongoose() {
  try {
    await mongoose.connect(process.env.URI);
    console.log('MongoDB connected...');
  } catch (error) {
    console.error('Error al conectar a MongoDB con Mongoose:', error);
    process.exit(1);
  }
}
connectToMongoose();

// Middleware
app.use(express.json());
app.use(cors({
  origin: process.env.ORIGIN,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use(cookieParser());

// Rutas
const rutas = [
  require('./tables/workerpage/activity/activityRoutes'),
  require('./tables/workerpage/activitycompletiondate/activityCompletionDateRoutes'),
  require('./tables/workerpage/specificobjective/specificObjectiveRoutes'),
  require('./tables/workerpage/generalobjective/generalObjectiveRoutes'),
  require('./tables/workerpage/subcompany/subcompanyRoutes'),
  require('./tables/workerpage/worker/workerRoutes'),
  require('./tables/workerpage/subcompanyworker/subcompanyWorkerRoutes'),
  require('./tables/partnerpage/user/userRoutes'),
  require('./tables/companypage/companyacquisition/companyAcquisitionRoutes'),
  require('./tables/companypage/companyarea/companyAreaRoutes'),
  require('./tables/companypage/company/companyRoutes'),
  require('./tables/companypage/iso/isoRoutes'),
  require('./tables/companypage/companycountry/companyCountryRoutes'),
  require('./tables/workerpage/rol/rolRoutes'),
  require('./tables/workerpage/workerNationality/workerNationalityRoutes'),
  require('./tables/companypage/companysite/companySiteRoutes'),
  require('./tables/companypage/companyacquisitiontype/companyAcquisitionTypeRoutes'),
];
rutas.forEach(route => app.use(route));

// Error handler
app.use((err, req, res, next) => {
  console.error('Error:', err.stack);
  res.status(err.status || 500).json({
    message: err.message || 'Internal Server Error',
  });
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app;