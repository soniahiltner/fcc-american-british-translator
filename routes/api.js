"use strict";

const Translator = require("../components/translator.js");

module.exports = function (app) {
  const translator = new Translator();

  app.route("/api/translate").post((req, res) => {
    const { text, locale } = req.body;
    console.log(req.body);
    let amToBi = "american-to-british";
    let biToAm = "british-to-american";
    
    if (text == "") {
      return res.json({ error: "No text to translate" });
    } else if (!text || !locale) {
      return res.json({ error: "Required field(s) missing" });
    }

    if (locale !== amToBi && locale !== biToAm) {
      return res.json({ error: "Invalid value for locale field" });
    }
    if (locale === amToBi || locale === biToAm) {
      let solution = translator.translator(locale, text);
      if (solution === text) {
        res.json({ text, translation: "Everything looks good to me!" });
      } else {
        res.json({ text, translation: solution });
      }
    }
  });
};
