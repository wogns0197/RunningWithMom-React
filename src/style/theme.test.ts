import * as theme from "./theme"
// @ponicode
describe("theme.hexToRgba", () => {
    test("0", () => {
        let callFunction: any = () => {
            theme.hexToRgba("Edmond", 120)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            theme.hexToRgba(" #", 12)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            theme.hexToRgba("# ", 20)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            theme.hexToRgba("#Michael", 720)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            theme.hexToRgba("Anas##Edmond", 576)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            theme.hexToRgba("", NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})
