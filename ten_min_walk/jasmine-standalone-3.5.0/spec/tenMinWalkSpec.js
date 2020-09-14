'use strict';

describe("Walking Generator", () => {
    it("Takes an array checks the length is 10 to return true", () => {
        var walkingGen = new WalkingGenerator 
        expect(walkingGen.tenMinWalk(['w', 's', 'e', 'e', 'n', 'n', 'e', 's', 'w', 'w'])).toEqual(true)
    })

    it("Returns false if array less than 10", () => {
        var walkingGen = new WalkingGenerator 
        expect(walkingGen.tenMinWalk(['w', 's'])).toEqual(false)
    })

    it("Returns false to length 10 but not to start point", () => {
        var walkingGen = new WalkingGenerator 
        expect(walkingGen.tenMinWalk(['w', 's', 'e', 'n', 'n', 'e', 's', 'w', 'w', 'w'])).toEqual(false)
    })
})