const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {
  test(
    "Translation with text and locale fields: POST request to /api/translate", function (done) {
      chai
        .request(server)
        .post("/api/translate").send({
        text: "First, caramelise the onions.",
        locale: "british-to-american",
      })
        .end((err, res) => {
          assert.equal(res.status, 200)
          assert.equal(res.body.text, "First, caramelise the onions.")
          assert.equal(
            res.body.translation,
            'First, <span class="highlight">caramelize</span> the onions.'
          );
          done()
      })
    }
  );

  test(
    "Translation with text and invalid locale field: POST request to /api/translate", function (done) {
      chai.request(server).post("/api/translate").send({
        text: "We watched the footie match for a while.",
        locale: "american-to-spanish"
      })
        .end((err, res) => {
          assert.equal(res.status, 200)
          assert.equal(res.body.error, "Invalid value for locale field")
          done()
        })
    }
  );

  test("Translation with missing text field: POST request to /api/translate", function (done) {
    chai.request(server).post("/api/translate").send({
      locale: "british-to-american",
    })
      .end((err, res) => {
        assert.equal(res.status, 200)
        assert.equal(res.body.error, "Required field(s) missing")
        done()
      })
  });

  test("Translation with missing locale field: POST request to /api/translate", function (done) {
    chai.request(server).post("/api/translate").send({
      text: "Tea time is usually around 4 or 4.30.",
    })
      .end((err, res) => {
        assert.equal(res.status, 200)
        assert.equal(res.body.error, "Required field(s) missing")
        done()
    })
  });

  test("Translation with empty text: POST request to /api/translate", function (done) {
    chai.request(server).post("/api/translate").send({
      text: "",
      locale: "british-to-american",
    })
      .end((err, res) => {
        assert.equal(res.status, 200)
        assert.equal(res.body.error, "No text to translate")
        done()
    })
  });

  test(
    "Translation with text that needs no translation: POST request to /api/translate", function (done) {
      chai.request(server).post("/api/translate").send({
        text: "I ate yogurt for breakfast.",
        locale: "british-to-american",
      })
        .end((err, res) => {
          assert.equal(res.status, 200)
          assert.equal(res.body.text, "I ate yogurt for breakfast.")
          assert.equal(res.body.translation, "Everything looks good to me!")
          done()
      })
    }
  );
});

