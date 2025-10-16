const express = require('express');
const router = express.Router();
const beritaController = require('../controllers/beritaController');

// GET semua berita
router.get('/', beritaController.getAllBerita);

// POST tambah berita baru
router.post('/', beritaController.createBerita);

module.exports = router;
