import { fireEvent, render, screen} from "@testing-library/react"
import RestaurantMenu from "../RestaurantMenu"
import { act } from "react"
import MOCK_DATA from "../mocks/ResMenuMock.json"
import "@testing-library/jest-dom"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import Header from "../Header"
import { BrowserRouter } from "react-router-dom"
import Cart from "../Cart"

global.fetch = jest.fn(() => Promise.resolve(
    {
        json: () => Promise.resolve(MOCK_DATA)
    }
))

it("Should load RestaurantMenu component", async () => {
    await act(async () => {
        render(
        <Provider store={appStore}>
            <RestaurantMenu/>
        </Provider>
        )
    })
    const accordianHeader = screen.getByText("Specialty Pizzas (2)")
    expect(accordianHeader).toBeInTheDocument();
})

it("Should show list of foodItems when clicked on accordian", async () => {
    await act(async () => {
        render(
        <Provider store={appStore}>
            <RestaurantMenu/>
        </Provider>
        )
    })
    const accordianHeader = screen.getByText("Specialty Pizzas (2)")
    fireEvent.click(accordianHeader);
    expect(screen.getAllByTestId("foodItems").length).toBe(2);
})

it("Should update cart in header while adding items", async () => {
    await act(async () => {
        render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
                <RestaurantMenu/>
            </Provider>
        </BrowserRouter>
        )
    })
    const accordianHeader = screen.getByText("Specialty Pizzas (2)")
    fireEvent.click(accordianHeader);
    expect(screen.getAllByTestId("foodItems").length).toBe(2);
    const addBtns = screen.getAllByRole("button", {name: "Add +"});
    fireEvent.click(addBtns[0]);
    expect(screen.getByText("🛒 - (1) items"))
    fireEvent.click(addBtns[1]);
    expect(screen.getByText("🛒 - (2) items"))
})

it("Should render added items on cart page", async () => {
    await act(async () => {
        render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
                <RestaurantMenu/>
                <Cart />
            </Provider>
        </BrowserRouter>
        )
    })
    const accordianHeader = screen.getByText("Specialty Pizzas (2)")
    fireEvent.click(accordianHeader);
    const addBtns = screen.getAllByRole("button", {name: "Add +"});
    fireEvent.click(addBtns[0]);
    fireEvent.click(addBtns[1]);
    //two items in Specialty Pizzas (2) accordian + two items added in above test + two items added in this test => total = 6
    expect(screen.getAllByTestId("foodItems").length).toBe(6);
})

it("Should clear all items on cart page when clearCart is clicked", async () => {
    await act(async () => {
        render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
                <RestaurantMenu/>
                <Cart />
            </Provider>
        </BrowserRouter>
        )
    })
    const accordianHeader = screen.getByText("Specialty Pizzas (2)")
    fireEvent.click(accordianHeader);
    const clearBtn = screen.getByRole("button", {name: "Clear Cart"})
    const addBtns = screen.getAllByRole("button", {name: "Add +"});
    fireEvent.click(addBtns[0]);
    fireEvent.click(addBtns[1]);
    expect(screen.getAllByTestId("foodItems").length).toBe(8);
    fireEvent.click(clearBtn);
    expect(screen.getAllByTestId("foodItems").length).toBe(2);
    expect(screen.getByText("Cart is empty. Add items to the cart!")).toBeInTheDocument()
})