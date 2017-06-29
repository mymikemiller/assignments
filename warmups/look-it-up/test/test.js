let chai = require("chai");
let assert = chai.assert;

//import code
let addWord = require("../app.js").addWord;
let lookItUp = require("../app.js").lookItUp;

describe("A dict to add and look up words", () => {
    it("Should store the word when added", () => {
        addWord("blueberry", "a blue berry")
        assert.equal(lookItUp("blueberry"), "a blue berry");
        addWord("flower", "uhh a plant");
        assert.equal(lookItUp("flower"), "uhh a plant");
    });

    it("Should return null when we lookup a word not present", () => {
        assert.equal(lookItUp("flabbergasted"), null);
        assert.equal(lookItUp("building"), null);
    });
    it("Should  not allow duplicates", () => {
        addWord("cheese", "mmm");
        assert.equal(addWord("cheese", "can't add"), false);
    });
});