const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator
suite('Unit Tests', () => {
  suite("Translations to british english", () => {
    test("Mangoes are my favorite fruit.", function (done) {
      assert.equal(
        translator.translator(
          "american-to-british",
          "Mangoes are my favorite fruit."
        ),
        'Mangoes are my <span class="highlight">favourite</span> fruit.'
      );
      done();
    });
     test("I ate yogurt for breakfast.", function (done) {
       assert.equal(
         translator.translator(
           "american-to-british",
           "I ate yogurt for breakfast."
         ),
         'I ate <span class="highlight">yoghurt</span> for breakfast.'
       );
       done();
     });
    
     test("We had a party at my friend's condo.", function (done) {
       assert.equal(
         translator.translator(
           "american-to-british",
           "We had a party at my friend's condo."
         ),
         `We had a party at my friend's <span class="highlight">flat</span>.`
       );
       done();
     });

    test("Can you toss this in the trashcan for me?", function (done) {
      assert.equal(
        translator.translator(
          "american-to-british",
          "Can you toss this in the trashcan for me?"
        ),
        'Can you toss this in the <span class="highlight">bin</span> for me?'
      );
      done();
    });

    test("The parking lot was full.", function (done) {
      assert.equal(
        translator.translator(
          "american-to-british",
          "The parking lot was full."
        ),
        'The <span class="highlight">car park</span> was full.'
      );
      done();
    });

    test("Like a high tech Rube Goldberg machine.", function (done) {
      assert.equal(
        translator.translator(
          "american-to-british",
          "Like a high tech Rube Goldberg machine."
        ),
        'Like a high tech <span class="highlight">Heath Robinson device</span>.'
      );
      done();
    });

     test("To play hooky means to skip class or work.", function (done) {
       assert.equal(
         translator.translator(
           "american-to-british",
           "To play hooky means to skip class or work."
         ),
         'To <span class="highlight">bunk off</span> means to skip class or work.'
       );
       done();
     });

    test("No Mr. Bond, I expect you to die.", function (done) {
      assert.equal(
        translator.translator(
          "american-to-british",
          "No Mr. Bond, I expect you to die."
        ),
        'No <span class="highlight">Mr</span> Bond, I expect you to die.'
      );
      done();
    });
    
    test("Dr. Grosh will see you now.", function (done) {
      assert.equal(
        translator.translator(
          "american-to-british",
          "Dr. Grosh will see you now."
        ),
        '<span class="highlight">Dr</span> Grosh will see you now.'
      );
      done();
    });

    test("Lunch is at 12:15 today.", function (done) {
      assert.equal(
        translator.translator(
          "american-to-british",
          "Lunch is at 12:15 today."
        ),
        'Lunch is at <span class="highlight">12.15</span> today.'
      );
      done();
    });
    
  

  })

  suite("Translations to american english", () => {
    test("We watched the footie match for a while.", function (done) {
      assert.equal(
        translator.translator(
          "british-to-american",
          "We watched the footie match for a while."
        ),
        'We watched the <span class="highlight">soccer</span> match for a while.'
      );
      done();
    });

    test("Paracetamol takes up to an hour to work.", function (done) {
      assert.equal(
        translator.translator(
          "british-to-american",
          "Paracetamol takes up to an hour to work."
        ),
        '<span class="highlight">Tylenol</span> takes up to an hour to work.'
      );
      done();
    });

    test("First, caramelise the onions.", function (done) {
      assert.equal(
        translator.translator(
          "british-to-american",
          "First, caramelise the onions."
        ),
        'First, <span class="highlight">caramelize</span> the onions.'
      );
      done();
    });

    test("I spent the bank holiday at the funfair.", function (done) {
      assert.equal(
        translator.translator(
          "british-to-american",
          "I spent the bank holiday at the funfair."
        ),
        'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.'
      );
      done();
    });

    test("I had a bicky then went to the chippy.", function (done) {
      assert.equal(
        translator.translator(
          "british-to-american",
          "I had a bicky then went to the chippy."
        ),
        'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.'
      );
      done();
    });

    test("I've just got bits and bobs in my bum bag.", function (done) {
      assert.equal(
        translator.translator(
          "british-to-american",
          "I've just got bits and bobs in my bum bag."
        ),
        `I've just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.`
      );
      done();
    });

    test("The car boot sale at Boxted Airfield was called off.", function (done) {
      assert.equal(
        translator.translator(
          "british-to-american",
          "The car boot sale at Boxted Airfield was called off."
        ),
        'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.'
      );
      done();
    });

    test("Have you met Mrs Kalyani?", function (done) {
      assert.equal(
        translator.translator(
          "british-to-american",
          "Have you met Mrs Kalyani?"
        ),
        'Have you met <span class="highlight">Mrs.</span> Kalyani?'
      );
      done();
    });

    test("Prof Joyner of King's College, London.", function (done) {
      assert.equal(
        translator.translator(
          "british-to-american",
          "Prof Joyner of King's College, London."
        ),
        `<span class="highlight">Prof.</span> Joyner of King's College, London.`
      );
      done();
    });

    test("Tea time is usually around 4 or 4.30.", function (done) {
      assert.equal(
        translator.translator(
          "british-to-american",
          "Tea time is usually around 4 or 4.30."
        ),
        'Tea time is usually around 4 or <span class="highlight">4:30</span>.'
      );
      done();
    });


  })

  suite("Highlights", () => {
    test("Highlight translation in Mangoes are my favorite fruit.", function (done) {
      assert.equal(
        translator.translator(
          "american-to-british",
          "Mangoes are my favorite fruit."
        ),
        'Mangoes are my <span class="highlight">favourite</span> fruit.'
      );
      done();
    });

    test("Highlight translation in I ate yogurt for breakfast.", function (done) {
      assert.equal(
        translator.translator(
          "american-to-british",
          "I ate yogurt for breakfast."
        ),
        'I ate <span class="highlight">yoghurt</span> for breakfast.'
      );
      done();
    });

    test("Highlight translation in We watched the footie match for a while.", function (done) {
      assert.equal(
        translator.translator(
          "british-to-american",
          "We watched the footie match for a while."
        ),
        'We watched the <span class="highlight">soccer</span> match for a while.'
      );
      done();
    });

    test("Paracetamol takes up to an hour to work.", function (done) {
      assert.equal(
        translator.translator(
          "british-to-american",
          "Paracetamol takes up to an hour to work."
        ),
        '<span class="highlight">Tylenol</span> takes up to an hour to work.'
      );
      done();
    });
  })

});
