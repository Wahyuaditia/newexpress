const Berita = require('../models/berita');

exports.getAllBerita = async (req, res) => {
  try {
    // optional pagination: ?page=1&limit=10
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const limit = Math.max(1, parseInt(req.query.limit) || 0); // 0 = no limit
    const skip = limit ? (page - 1) * limit : 0;

    const query = {}; // bisa dikembangkan (filter by tanggal, judul, dll)
    const [data, total] = await Promise.all([
      limit ? Berita.find(query).sort({ tanggal: -1 }).skip(skip).limit(limit) : Berita.find(query).sort({ tanggal: -1 }),
      Berita.countDocuments(query)
    ]);

    res.json({
      success: true,
      total,
      page,
      limit: limit || total,
      data
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Terjadi kesalahan server' });
  }
};

exports.createBerita = async (req, res) => {
  try {
    const { judul, deskripsi, isi, tanggal } = req.body;

    // validasi sederhana
    if (!judul || !deskripsi || !isi) {
      return res.status(400).json({ success: false, message: 'Field judul, deskripsi dan isi wajib diisi' });
    }

    const berita = new Berita({
      judul,
      deskripsi,
      isi,
      tanggal: tanggal ? new Date(tanggal) : undefined // jika tidak diberikan, default dari schema akan dipakai
    });

    const saved = await berita.save();
    res.status(201).json({ success: true, data: saved });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Gagal menyimpan data berita' });
  }
};
