
import { Button } from './Button';
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("button", () => {
    it("should render correctly", () => {
        render(<Button variant='green'>klicka här</Button>);
        const button = screen.getByText("klicka här");
        expect(button).toBeInTheDocument();
    })
})

