import React from "react";
import ReactDOM from "react-dom";
import Gapp from "./Gapp";
import { render, fireEvent } from "@testing-library/react"


test("Testing the Gapp component", () => {

    const { getByText, getByLabelText, getAllByRole } = render(<Gapp/>);

    getByText("TODOs");
    // getByLabelText("What needs to be done?");
    getByText("Add #1");
    const input = getByLabelText("cost-input");
    fireEvent.change(input, {target: {value: "RTL Presentation Slides"}});
    fireEvent.click(getByText("Add #1"));

    getByText("RTL Presentation Slides");
    getByText("Add #2");
    
    //expect(getAllByRole("textbox")).toHaveProperty("aria-label", "cost-input");
});


export {}