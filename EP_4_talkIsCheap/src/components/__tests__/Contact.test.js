import { render, screen } from "@testing-library/react";
import Contact from "../Conact";
import "@testing-library/jest-dom";

describe("These Contact page test cases", () => {
    // beforeAll(() => {
    //     console.log("Beore All");
    // })
    // beforeEach(() => {
    //     console.log("Beore Each");
    // })
    // afterAll(() => {
    //     console.log("After All");
    // })
    // afterEach(() => {
    //     console.log("After Each");
    // })
    test("Should load Contact component", () => {
        render(<Contact/>)
        //Query
        const heading = screen.getByRole("heading");
        //Assertion
        expect(heading).toBeInTheDocument();
    })

    test("Should load button in Contact component", () => {
        render(<Contact/>)
        const button = screen.getByText("Submit");
        expect(button).toBeInTheDocument();
    })

    test("Should load input name inside Contact component", () => {
        render(<Contact/>)
        const inputName = screen.getByPlaceholderText("name");
        expect(inputName).toBeInTheDocument();
    })

    test("Should load 2 inputs inside Contact component", () => {
        render(<Contact/>)
        const inputs = screen.getAllByRole("textbox");
        //console.log(inputs[0]);
        expect(inputs).toHaveLength(2);
    })
})

