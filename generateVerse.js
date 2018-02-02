module.exports = function generateVerse() {
  var random = Math.ceil(Math.random() * 114 + (1 / 114));


  var randomSurah = require("./Quran/surah/surah_" + random);
  var surahTranslation = require("./Quran/translation/en/en_translation_" + random);
  var surahInfo = require("./Quran/surah");


  var surahName = surahInfo[random - 1].title,
    surahIndex = surahInfo[random - 1].index,
    surahType = surahInfo[random - 1].type,
    juzLength = randomSurah.juz.length,
    surahEndString = randomSurah.juz[juzLength - 1].verse.end,
    surahEnd = Number(surahEndString.replace("verse_", " "));

  var randomVerseNumber = Math.ceil(Math.random() * surahEnd);
  var verse = randomSurah.verse["verse_" + randomVerseNumber],
    verseEn = surahTranslation.verse["verse_" + randomVerseNumber];

  return {
    verse: verse,
    verseEn: verseEn,
    randomVerseNumber: randomVerseNumber,
    surahName: surahName,
    surahIndex: surahIndex,
    surahType: surahType

  }
}



