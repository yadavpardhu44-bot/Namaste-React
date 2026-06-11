import { render, screen } from "@testing-library/react"
import Grocery from "../Grocery"
import "@testing-library/jest-dom"

it("Should render Grocery component with header", () => {
    render(<Grocery />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
})