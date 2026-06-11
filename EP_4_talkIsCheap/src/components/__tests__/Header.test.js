import { Provider } from "react-redux"
import Header from "../Header"
import { fireEvent, render, screen } from "@testing-library/react"
import appStore from "../../utils/appStore"
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
it("Should render Header component with a login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )
    const loginButton = screen.getByRole("button", {name: "Log In"});
    expect(loginButton).toBeInTheDocument();
})

it("Should render Header component with a Cart items 0", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )
    const CartItems = screen.getByText("🛒 - (0) items");
    expect(CartItems).toBeInTheDocument();
})

it("Should render Header component with a Cart", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )
    const CartItems = screen.getByText(/🛒/);
    expect(CartItems).toBeInTheDocument();
})

it("Should change Log In button to Log Out on click", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )
    const loginButton = screen.getByRole("button", {name: "Log In"});
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button", {name: "Log Out"});
    expect(logoutButton).toBeInTheDocument();
    fireEvent.click(logoutButton);
    expect(loginButton).toBeInTheDocument();
})

it("Should render Header component with OnlineSatus", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )
    fireEvent(window, new Event("online"))
    expect(screen.getByText(/✅/)).toBeInTheDocument();
    fireEvent(window, new Event("offline"))
    expect(screen.getByText(/🔴/)).toBeInTheDocument();
})