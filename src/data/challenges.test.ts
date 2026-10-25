import test from 'node:test';
import assert from 'node:assert/strict';
import {
  CHALLENGES,
  MISSION_BRIEFINGS,
  getChallengesByChapterId,
  getChallengeById,
  getMissionBriefing
} from './challenges.ts';

test('memastikan kelima bab memiliki pengantar misi (briefing) yang lengkap', () => {
  const chapterIds = ['chapter-1', 'chapter-2', 'chapter-3', 'chapter-4', 'chapter-5'];
  for (const cid of chapterIds) {
    const briefing = getMissionBriefing(cid);
    assert.ok(briefing, `Briefing tidak ditemukan untuk ${cid}`);
    assert.ok(briefing?.officerName.length > 3, `Nama perwira tidak valid pada ${cid}`);
    assert.ok(briefing?.officerRole.length > 5, `Peran perwira tidak valid pada ${cid}`);
    assert.ok(briefing?.briefingText.length >= 2, `Teks briefing kurang dari 2 paragraf pada ${cid}`);
    assert.ok(briefing?.directives.length >= 3, `Arahan investigasi kurang dari 3 pada ${cid}`);
  }
});

test('memastikan setiap bab memiliki 3 tantangan sejarah yang valid (total 15 tantangan)', () => {
  assert.equal(CHALLENGES.length, 15, 'Total tantangan harus tepat 15 untuk 5 bab');

  const chapterIds = ['chapter-1', 'chapter-2', 'chapter-3', 'chapter-4', 'chapter-5'];
  for (const cid of chapterIds) {
    const chapterChallenges = getChallengesByChapterId(cid);
    assert.equal(chapterChallenges.length, 3, `Jumlah tantangan pada ${cid} harus 3`);
    assert.deepEqual(chapterChallenges.map(c => c.order), [1, 2, 3], `Urutan tantangan harus 1, 2, 3 pada ${cid}`);

    for (const challenge of chapterChallenges) {
      assert.ok(challenge.id.length > 0, 'ID tantangan tidak boleh kosong');
      assert.ok(challenge.title.length > 5, `Judul tantangan terlalu pendek pada ${challenge.id}`);
      assert.ok(challenge.context.length > 10, `Konteks tantangan terlalu pendek pada ${challenge.id}`);
      assert.ok(challenge.question.endsWith('?'), `Pertanyaan harus diakhiri tanda tanya pada ${challenge.id}`);
      assert.equal(challenge.options.length, 4, `Opsi jawaban harus berjumlah 4 pada ${challenge.id}`);
      assert.ok(challenge.correctOptionIndex >= 0 && challenge.correctOptionIndex <= 3, `Indeks jawaban benar di luar rentang pada ${challenge.id}`);
      assert.ok(challenge.explanation.length > 30, `Penjelasan jawaban terlalu pendek pada ${challenge.id}`);
      // Verifikasi keberadaan dan validitas sumber sejarah
      assert.ok(Array.isArray(challenge.sources) && challenge.sources.length >= 1, `Setiap tantangan wajib memiliki minimal 1 sumber sejarah pada ${challenge.id}`);
      for (const src of challenge.sources) {
        assert.ok(src.title.length > 5, `Judul sumber tidak valid pada ${challenge.id}`);
        assert.ok(src.institution.length > 3, `Institusi sumber tidak valid pada ${challenge.id}`);
        assert.ok(src.url.startsWith('https://'), `URL sumber harus berupa tautan resmi HTTPS pada ${challenge.id}`);
      }
    }
  }
});

test('audit sejarah Bab 2: pembentukan NATO harus menyebutkan tepat 12 negara pendiri (bukan 11 negara Eropa)', () => {
  const natoChallenge = getChallengeById('ch2-1');
  assert.ok(natoChallenge, 'Tantangan ch2-1 harus ditemukan');
  assert.ok(
    natoChallenge.explanation.includes('12 negara pendiri') &&
    natoChallenge.explanation.includes('Kanada') &&
    natoChallenge.explanation.includes('Amerika Serikat'),
    'Penjelasan NATO harus mencantumkan 12 negara pendiri termasuk Kanada dan AS'
  );
  assert.ok(
    !natoChallenge.explanation.includes('sebelas negara Eropa') &&
    !natoChallenge.explanation.includes('11 negara Eropa'),
    'Penjelasan NATO tidak boleh keliru menyebut 11 negara Eropa'
  );
});

test('audit sejarah Bab 2 & Bab 3: status Perang Korea dan Krisis Rudal Kuba', () => {
  const koreaChallenge = getChallengeById('ch2-2');
  assert.ok(koreaChallenge, 'Tantangan ch2-2 harus ditemukan');
  assert.ok(
    koreaChallenge.explanation.includes('Gencatan Senjata') || koreaChallenge.explanation.includes('Armistice'),
    'Perang Korea harus dijelaskan berakhir dengan gencatan senjata, bukan traktat damai'
  );

  const cubanQuarantine = getChallengeById('ch3-2');
  assert.ok(cubanQuarantine, 'Tantangan ch3-2 harus ditemukan');
  assert.ok(
    cubanQuarantine.explanation.includes('karantina') && cubanQuarantine.explanation.includes('perang'),
    'Krisis Rudal Kuba harus membedakan karantina dan blokade perang'
  );

  const cubanDeal = getChallengeById('ch3-3');
  assert.ok(cubanDeal, 'Tantangan ch3-3 harus ditemukan');
  assert.ok(
    cubanDeal.explanation.includes('Turki') && cubanDeal.explanation.includes('Jupiter'),
    'Penyelesaian krisis Kuba harus mendokumentasikan komitmen rahasia rudal Jupiter di Turki'
  );
});

test('audit sejarah Bab 4 & Bab 5: kronologi Sputnik, Apollo, dan pembubaran Uni Soviet', () => {
  const sputnik = getChallengeById('ch4-1');
  assert.ok(sputnik?.explanation.includes('Sputnik 1') && sputnik?.explanation.includes('ICBM'));

  const apollo = getChallengeById('ch4-3');
  assert.ok(apollo?.explanation.includes('Armstrong') && apollo?.explanation.includes('Aldrin'));

  const berlinWall = getChallengeById('ch5-2');
  assert.ok(berlinWall?.explanation.includes('Günter Schabowski') && berlinWall?.explanation.includes('9 November 1989'));

  const ussrDissolution = getChallengeById('ch5-3');
  assert.ok(
    ussrDissolution?.explanation.includes('25 Desember 1991') &&
    ussrDissolution?.explanation.includes('26 Desember 1991'),
    'Pembubaran Uni Soviet harus memuat tanggal pengunduran diri Gorbachev (25 Des) dan pembubaran resmi (26 Des)'
  );
});

test('fungsi helper pencarian tantangan bekerja dengan benar', () => {
  const ch1_1 = getChallengeById('ch1-1');
  assert.ok(ch1_1);
  assert.equal(ch1_1?.chapterId, 'chapter-1');
  assert.equal(ch1_1?.order, 1);

  const nonExistent = getChallengeById('ch-invalid');
  assert.equal(nonExistent, undefined);

  const ch3Challenges = getChallengesByChapterId('chapter-3');
  assert.equal(ch3Challenges.length, 3);
  assert.equal(ch3Challenges[0].id, 'ch3-1');
});

test('validasi format URL HTTPS pada seluruh 15 tantangan sejarah', () => {
  assert.equal(CHALLENGES.length, 15);
  for (const challenge of CHALLENGES) {
    assert.ok(challenge.sources.length >= 1, `Tantangan ${challenge.id} tidak memiliki sumber`);
    for (const source of challenge.sources) {
      assert.doesNotThrow(() => {
        const parsed = new URL(source.url);
        assert.equal(parsed.protocol, 'https:', `Protokol harus https pada ${source.url}`);
        assert.ok(parsed.hostname.includes('.'), `Hostname tidak valid pada ${source.url}`);
      }, `Format URL tidak valid: ${source.url}`);
    }
  }
});

test('verifikasi 11 URL sumber sejarah', () => {
  // 1. Bab 2 soal 2, sumber 1
  const ch2_2 = getChallengeById('ch2-2');
  assert.ok(ch2_2);
  const ch2_2_urls = ch2_2.sources.map(s => s.url);
  assert.ok(
    ch2_2_urls.includes('https://www.archives.gov/publications/prologue/2003/summer/korean-war-armistice'),
    'ch2-2 sumber 1 harus menggunakan URL Prologue Magazine NARA yang diperbarui'
  );
  // 2. Bab 2 soal 2, sumber 2
  assert.ok(
    ch2_2_urls.includes('https://history.state.gov/milestones/1945-1952/korean-war'),
    'ch2-2 sumber 2 harus menggunakan URL Korean War State Dept yang diperbarui'
  );

  // 3. Bab 3 soal 2, sumber 2
  const ch3_2 = getChallengeById('ch3-2');
  assert.ok(ch3_2);
  const ch3_2_urls = ch3_2.sources.map(s => s.url);
  assert.ok(
    ch3_2_urls.includes('https://history.state.gov/milestones/1961-1968/cuban-missile-crisis'),
    'ch3-2 sumber 2 harus menggunakan URL Cuban Missile Crisis State Dept yang diperbarui'
  );

  // 4. Bab 3 soal 3, sumber 2
  const ch3_3 = getChallengeById('ch3-3');
  assert.ok(ch3_3);
  const ch3_3_urls = ch3_3.sources.map(s => s.url);
  assert.ok(
    ch3_3_urls.includes('https://nsarchive.gwu.edu/briefing-book/cuban-missile-crisis-nuclear-vault/2023-02-16/jupiter-missiles-and-endgame-cuban'),
    'ch3-3 sumber 2 harus menggunakan URL Jupiter Missiles National Security Archive yang diperbarui'
  );

  // 5. Bab 4 soal 1, sumber 2
  const ch4_1 = getChallengeById('ch4-1');
  assert.ok(ch4_1);
  const ch4_1_urls = ch4_1.sources.map(s => s.url);
  assert.ok(
    ch4_1_urls.includes('https://airandspace.si.edu/multimedia-gallery/image/sputnik-1jpg'),
    'ch4-1 sumber 2 harus menggunakan URL Sputnik 1 Smithsonian Air and Space Museum yang diperbarui'
  );

  // 6. Bab 4 soal 2, sumber 2
  const ch4_2 = getChallengeById('ch4-2');
  assert.ok(ch4_2);
  const ch4_2_urls = ch4_2.sources.map(s => s.url);
  assert.ok(
    ch4_2_urls.includes('https://science.nasa.gov/resource/yuri-gagarin-first-human-in-space/'),
    'ch4-2 sumber 2 harus menggunakan URL Yuri Gagarin NASA Science yang diperbarui'
  );

  // 7. Bab 5 soal 1, sumber 2
  const ch5_1 = getChallengeById('ch5-1');
  assert.ok(ch5_1);
  const ch5_1_urls = ch5_1.sources.map(s => s.url);
  assert.ok(
    ch5_1_urls.includes('https://history.state.gov/milestones/1989-1992/fall-of-communism'),
    'ch5-1 sumber 2 harus menggunakan URL Fall of Communism State Dept yang diperbarui'
  );

  // 8 & 9. Bab 5 soal 2, sumber 1 & sumber 2
  const ch5_2 = getChallengeById('ch5-2');
  assert.ok(ch5_2);
  const ch5_2_urls = ch5_2.sources.map(s => s.url);
  assert.ok(
    ch5_2_urls.includes('https://www.bundesarchiv.de/themen-entdecken/online-entdecken/storys/die-stasi-im-jahr-1989/november-1989/'),
    'ch5-2 sumber 1 harus menggunakan URL Bundesarchiv November 1989 yang diperbarui'
  );
  assert.ok(
    ch5_2_urls.includes('https://history.state.gov/milestones/1989-1992/fall-of-communism'),
    'ch5-2 sumber 2 harus menggunakan URL Fall of Communism State Dept yang diperbarui'
  );

  // 10 & 11. Bab 5 soal 3, sumber 1 & sumber 2
  const ch5_3 = getChallengeById('ch5-3');
  assert.ok(ch5_3);
  const ch5_3_urls = ch5_3.sources.map(s => s.url);
  assert.ok(
    ch5_3_urls.includes('https://history.state.gov/milestones/1989-1992/collapse-soviet-union'),
    'ch5-3 sumber 1 harus menggunakan URL Collapse of Soviet Union State Dept yang diperbarui'
  );
  assert.ok(
    ch5_3_urls.includes('https://nsarchive.gwu.edu/briefing-book/russia-programs/2021-12-21/end-soviet-union-1991'),
    'ch5-3 sumber 2 harus menggunakan URL End of Soviet Union 1991 National Security Archive yang diperbarui'
  );
});

test('UX: konsistensi indikator progres dan pemetaan empat opsi jawaban', () => {
  const chapterIds = ['chapter-1', 'chapter-2', 'chapter-3', 'chapter-4', 'chapter-5'];
  const expectedLetters = ['A', 'B', 'C', 'D'];

  for (const cid of chapterIds) {
    const list = getChallengesByChapterId(cid);
    assert.equal(list.length, 3, `Bab ${cid} harus memiliki tepat 3 tantangan`);

    list.forEach((challenge, idx) => {
      // 0-indexed idx correlates to order idx + 1
      assert.equal(challenge.order, idx + 1, `Urutan tantangan harus sesuai indeks progres pada ${challenge.id}`);
      assert.equal(challenge.options.length, 4, `Opsi tantangan harus berjumlah tepat 4 pada ${challenge.id}`);
      assert.ok(
        challenge.correctOptionIndex >= 0 && challenge.correctOptionIndex < 4,
        `correctOptionIndex harus memetakan ke salah satu opsi [${expectedLetters.join(', ')}]`
      );
      assert.ok(
        expectedLetters[challenge.correctOptionIndex] !== undefined,
        `Huruf opsi kunci jawaban harus valid (A, B, C, atau D)`
      );
    });
  }
});


