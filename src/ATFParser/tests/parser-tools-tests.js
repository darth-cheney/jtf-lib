/**
 * Mocha and Chai Tests for the
 * parserTools.js capabilities
 */
const chai = require("chai");
const assert = chai.assert;
const expect = chai.expect;
const { parse } = require("../parserTools");
const ATFInlineGrammar = require("../ATFInline/ATFtextGrammar");
const ATFStructureGrammar = require("../ATFStructure/ATFgrammar");

describe("Error Capturing", () => {
    it("Appropriately Captures a lexer error", () => {
        let example = `&P298489 = CBCY 03, p. 208, NBC
        @seal
        1. ha-ba-lu5-ge2
        2. ensi2 Adab{ki}
        3. ur-pa4-mu-ra
        4. dub-sar
        5. ARAD2-zu`;
        let run = function(){
            return parse(ATFInlineGrammar, 'inline', example);
        };
        expect(run).to.not.throw();
    });
    it("Appropriately Captures a grammar error", () => {
        let example = `@seal 1
        1. ha-ba-lu5-ge2
        2. ensi2 adab{ki}
        3. ur-pa4-mu-ra
        4. dub-sar
        5. ARAD2-zu`;
        let run = function(){
            return parse(ATFStructureGrammar, 'structure', example);
        };
        expect(run).to.not.throw();
    });
});
