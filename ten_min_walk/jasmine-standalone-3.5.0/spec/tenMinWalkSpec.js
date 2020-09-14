'use strict';

describe("Walking Generator", () => {



    it("Takes an array checks the length is 10 to return true", () => {
        var walkingGen = new WalkingGenerator 
        expect(walkingGen.tenMinWalk(['w', 's', 'e', 'e', 'n', 'n', 'e', 's', 'w', 'w'])).toEqual(true)
    })
})