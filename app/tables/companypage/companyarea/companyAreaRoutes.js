const express = require('express');
const router = express.Router();

//MIDDLEWARE
const { verifyToken } = require('../../../token');

//CONTROLADOR
const companyAreaController = require('./companyAreaController');

//RUTAS
router.post('/companyArea', verifyToken, companyAreaController.createCompanyArea);
router.get('/companyArea', verifyToken, companyAreaController.getAllCompanyAreas);
router.get('/companyArea/:id', verifyToken, companyAreaController.getCompanyArea);
router.get('/companyArea/:id/getChargeOfHigherHierarchyOfArea', verifyToken, companyAreaController.getChargeOfHigherHierarchyOfArea);
router.put('/companyArea/:id/addIso', verifyToken, companyAreaController.addIso);
router.put('/companyArea/:id/updateResponsibleEmployee', verifyToken, companyAreaController.updateResponsibleEmployee);
router.delete('/companyArea/:id', verifyToken, companyAreaController.deleteCompanyArea);
router.delete('/companyArea/:id/deleteIsos', verifyToken, companyAreaController.deleteIsos);
router.delete('/companyArea/:id/deleteEmployee', verifyToken, companyAreaController.deleteEmployee);

module.exports = router;
