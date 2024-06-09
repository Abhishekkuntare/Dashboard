const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

router.get('/data', dataController.getAllData);
router.get('/data/filtered', dataController.getFilteredData);
router.get('/likelihood', dataController.getTotalLikelihood);
router.get('/countries', dataController.getTotalCountries);
router.get('/sectors', dataController.getTotalSectors);
router.get('/topics', dataController.getTotalTopics);
router.get('/sources', dataController.getTotalSources);
router.get('/insights', dataController.getAllInsights);
router.get('/relevance', dataController.getTotalRelevance);
router.get('/data/end-years', dataController.getAllEndYears);
router.get('/data/topics', dataController.getAllTopics);
router.get('/data/intensities', dataController.getAllIntensities);
router.get('/data/sectors', dataController.getAllSectors);
router.get('/data/regions', dataController.getAllRegions);
router.get('/data/pestle', dataController.getAllPestleOptions);
router.get('/data/options', dataController.getAllDataOptions);
router.get('/unique-countries', dataController.getAllCountries); 
router.get('/data', dataController.getAllData);
router.get('/published', dataController.getAllPublished);
router.get('/titles', dataController.getAllTitles);

module.exports = router;
