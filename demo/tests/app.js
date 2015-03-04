/**
 * Created by Marco on 04/03/2015.
 */
describe("smoke test", function() {
    it("contains spec with an expectation", function() {
        expect(true).to.be.true;
    });
});

describe("money example", function() {
    it("exist money", function(){
        var five = new Money(5);
        expect(five.amount).equals(5);
        var ten = new Money(10);
        expect(ten.amount).equals(10);
    });
    it("multiply money by scalar 2", function(){
        var ten = new Money(10);
        ten.multiply(2);
        expect(ten.amount).equals(20);
    });
    it("multiply money by scalar 3", function(){
        var ten = new Money(10);
        ten.multiply(3);
        expect(ten.amount).equals(30);
    });
});