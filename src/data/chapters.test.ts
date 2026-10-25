import test from 'node:test';
import assert from 'node:assert/strict';
import {
  CHAPTERS,
  getAllChapters,
  getChapterById,
  getChapterByNumber,
  getNextChapterId,
  getPreviousChapterId
} from './chapters.ts';

test('memastikan terdapat tepat 5 bab sesuai spesifikasi proyek', () => {
  const chapters = getAllChapters();
  assert.equal(chapters.length, 5);
  assert.deepEqual(chapters.map(c => c.number), [1, 2, 3, 4, 5]);
});

test('memeriksa keabsahan judul resmi bahasa Inggris kelima bab', () => {
  const expectedTitles = [
    'A Divided World',
    'The Two Alliances',
    'Thirteen Days',
    'Race Beyond Earth',
    'The Final Chapter'
  ];
  const actualTitles = CHAPTERS.map(c => c.title);
  assert.deepEqual(actualTitles, expectedTitles);
});

test('memeriksa kelengkapan metadata dan deskripsi sejarah setiap bab', () => {
  for (const chapter of CHAPTERS) {
    assert.ok(chapter.id.startsWith('chapter-'), `id tidak valid: ${chapter.id}`);
    assert.ok(chapter.title.length > 0, `judul kosong pada bab ${chapter.number}`);
    assert.ok(chapter.indonesianTitle.length > 0, `judul indonesia kosong pada bab ${chapter.number}`);
    assert.ok(chapter.period.length > 0, `periode kosong pada bab ${chapter.number}`);
    assert.ok(chapter.description.length > 20, `deskripsi terlalu pendek pada bab ${chapter.number}`);
    assert.ok(chapter.summary.length > 50, `ringkasan terlalu pendek pada bab ${chapter.number}`);
    assert.ok(chapter.keyLocations.length >= 3, `lokasi kunci kurang dari 3 pada bab ${chapter.number}`);
    assert.ok(chapter.keyEvents.length >= 3, `peristiwa utama kurang dari 3 pada bab ${chapter.number}`);
    assert.ok(chapter.keyFigures.length >= 3, `tokoh kunci kurang dari 3 pada bab ${chapter.number}`);
    assert.ok(chapter.dossierCode.length > 3, `kode berkas tidak valid pada bab ${chapter.number}`);
    assert.ok(chapter.theater.length > 5, `wilayah teater tidak valid pada bab ${chapter.number}`);
  }
});

test('fungsi helper navigasi bab bekerja dengan benar dan membatasi batas bab', () => {
  const ch1 = getChapterById('chapter-1');
  assert.ok(ch1);
  assert.equal(ch1?.title, 'A Divided World');
  assert.equal(ch1?.theater, 'Eropa Tengah & Wilayah Berlin Terbagi');

  const ch3 = getChapterByNumber(3);
  assert.ok(ch3);
  assert.equal(ch3?.title, 'Thirteen Days');

  // Pengujian batasan bab pertama dan terakhir
  assert.equal(getPreviousChapterId('chapter-1'), null, 'Bab 1 tidak boleh memiliki bab sebelumnya');
  assert.equal(getNextChapterId('chapter-1'), 'chapter-2');
  assert.equal(getPreviousChapterId('chapter-2'), 'chapter-1');
  assert.equal(getNextChapterId('chapter-4'), 'chapter-5');
  assert.equal(getNextChapterId('chapter-5'), null, 'Bab 5 tidak boleh memiliki bab berikutnya');
  assert.equal(getPreviousChapterId('chapter-5'), 'chapter-4');

  // Pengujian id tidak dikenal
  assert.equal(getChapterById('chapter-invalid'), undefined);
  assert.equal(getNextChapterId('chapter-invalid'), null);
  assert.equal(getPreviousChapterId('chapter-invalid'), null);
});

test('audit sejarah Bab 2: summary Bab 2 harus mencatat 12 negara pendiri NATO (termasuk AS dan Kanada, bukan 11 negara Eropa)', () => {
  const ch2 = getChapterById('chapter-2');
  assert.ok(ch2);
  assert.ok(
    ch2.summary.includes('12 negara pendiri') &&
    ch2.summary.includes('Amerika Serikat') &&
    ch2.summary.includes('Kanada') &&
    ch2.summary.includes('10 negara Eropa'),
    'Summary Bab 2 wajib mencatat 12 negara pendiri NATO dengan rincian 2 negara Amerika Utara dan 10 negara Eropa'
  );
  assert.ok(
    !ch2.summary.includes('sebelas negara Eropa') &&
    !ch2.summary.includes('11 negara Eropa'),
    'Summary Bab 2 tidak boleh keliru menyebut 11 negara Eropa'
  );
});

test('audit sejarah Bab 1: summary Bab 1 harus mencatat rentang Blokade Berlin 24 Juni 1948 – 12 Mei 1949', () => {
  const ch1 = getChapterById('chapter-1');
  assert.ok(ch1);
  assert.ok(
    ch1.summary.includes('24 Juni 1948') && ch1.summary.includes('12 Mei 1949'),
    'Summary Bab 1 wajib memuat tanggal spesifik Blokade Berlin'
  );
});

