import { fireEvent, getAllByTestId, render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/resListDataMock.json"
import Body from "../Body";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        },
    });
});

it("Should search restaurant list for burger text input", async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Body/>
            </BrowserRouter>
        )
    })
    const cardsBeforeSearch = screen.getAllByTestId("resCard");
    expect(cardsBeforeSearch.length).toBe(9)
    const searchBtn = screen.getByRole("button", {name: "search"});
    const searchInput = screen.getByTestId("searchInput");
    fireEvent.change(searchInput, {target: {value:"burger"}})
    fireEvent.click(searchBtn);
    const cardsAfterSearch = screen.getAllByTestId("resCard");
    expect(cardsAfterSearch.length).toBe(1);
})

it("Should filter top rated restaurants", async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Body/>
            </BrowserRouter>
        )
    })
    const cardsBeforeFilter = screen.getAllByTestId("resCard");
    expect(cardsBeforeFilter.length).toBe(9);
    const topRatedRestaurantsBtn = screen.getByRole("button", {name: "Top Rated Restaurants"});
    fireEvent.click(topRatedRestaurantsBtn);
    const cardsAfterFiltered = screen.getAllByTestId("resCard");
    expect(cardsAfterFiltered.length).toBe(6);
})