const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");

class Translator {
  //swap spelling
  swapSpelling(object) {
    let result = {};
    for (const [key, value] of Object.entries(object)) {
      result[value] = key;
    }
    return result;
  }
  //Objects
  americanToBritishObject(americanToBritishSpelling, americanOnly) {
    return {
      ...americanToBritishSpelling,
      ...americanOnly,
    };
  }
  britishToAmericanObject() {
    const britToAmSpelling = this.swapSpelling(americanToBritishSpelling);
    return {
      ...britToAmSpelling,
      ...britishOnly,
    };
  }
  //Time translator
  timeTranslator(time, locale) {
    if (locale === "american-to-british") {
      return time.replace(":", ".");
    } else if (locale === "british-to-american") {
      return time.replace(".", ":");
    }
  }
  //Capitalize
  capitalize(title) {
    return title[0].toUpperCase().concat(title.slice(1));
  }
  //Translate
  translate(objectEntries, initialString, locale, titles) {
    const lowerCaseText = initialString.toLowerCase();
    const regexTime = /\d{1,2}:?\.?\d{2}/g;

    objectEntries.map(([key, value]) => {
      if (
        new RegExp(`${key} `, "gi").test(lowerCaseText) ||
        new RegExp(`${key}[^A-Za-z]`, "gi").test(lowerCaseText) ||
        new RegExp(`${key}$`, "gi").test(lowerCaseText)
      ) {
        initialString = initialString.replace(
          new RegExp(key, "gi"),
          `<span class="highlight">${value}</span>`
        );
      }
    });

    titles.map(([key, value]) => {
      if (
        new RegExp(`${key} `, "gi").test(lowerCaseText) ||
        new RegExp(` ${key} `, "gi").test(lowerCaseText) ||
        new RegExp(` ${key}$`, "gi").test(lowerCaseText)
      ) {
        initialString = initialString.replace(
          new RegExp(key, "gi"),
          `<span class="highlight">${this.capitalize(value)}</span>`
        );
      }
    });

    if (regexTime.test(initialString)) {
      const matches = initialString.match(regexTime);
      if (matches) {
        matches.forEach((time) => {
          initialString = initialString.replace(
            time,
            `<span class="highlight">${this.timeTranslator(
              time,
              locale
            )}</span>`
          );
        });
      }
    }
    return initialString;
  }
  //Translator
  translator(locale, initialString) {
    const americanToBritish = this.americanToBritishObject(
      americanToBritishSpelling,
      americanOnly
    );
    const britishToAmerican = this.britishToAmericanObject(
      americanToBritishSpelling
    );
    const americanToBritishEntries = Object.entries(americanToBritish);
    const britishToAmericanEntries = Object.entries(britishToAmerican);
    const britToAmTitles = this.swapSpelling(americanToBritishTitles);
    const americanTitles = Object.entries(americanToBritishTitles);
    const britishTitles = Object.entries(britToAmTitles);
    if (locale === "american-to-british") {
      return this.translate(
        americanToBritishEntries,
        initialString,
        locale,
        americanTitles
      );
    }
    if (locale === "british-to-american") {
      return this.translate(
        britishToAmericanEntries,
        initialString,
        locale,
        britishTitles
      );
    }
  }
}

module.exports = Translator;
