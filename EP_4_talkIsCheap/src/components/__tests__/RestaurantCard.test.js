import { render, screen } from "@testing-library/react"
import RestaurantCard, {PromotedRestaurantCard} from "../RestaurantCard"
import MOCK_DATA from "../mocks/resCardMock.json"
import "@testing-library/jest-dom"

it("Should render RestaurantCard component with props Data", () => {
    render(<RestaurantCard resData = {MOCK_DATA}/>)
    const name = screen.getByText("Burger Hub");
    expect(name).toBeInTheDocument();
})

it("Should render RestaurantCard component with promoted label", () => {
    //HomeWork : test HOC withPromotedLabel()
    const RestaurantCardPromoted = PromotedRestaurantCard(RestaurantCard);
    render(<RestaurantCardPromoted resData={MOCK_DATA}/>)
    const promoted = screen.getByText("Promoted");
    expect(promoted).toBeInTheDocument();
})