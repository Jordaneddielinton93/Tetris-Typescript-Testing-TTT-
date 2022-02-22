import { render, screen } from "@testing-library/react"
import LandingPage from "./LandingPage"

describe("The whole landing page has Tetris and  grinds",()=>{

  it("should render a landing page",()=>{
    render(<LandingPage/>)
    let LandingPageTag= screen.getByTestId("LandingPage")
    expect(LandingPageTag).toBeInTheDocument()
  })
  it("should render a TetrisGridContaineer page",()=>{
    render(<LandingPage/>)
    let TetrisGridContainer= screen.getByTestId("TetrisGridContainer")
    expect(TetrisGridContainer).toBeInTheDocument()
  })

  it("should contain a main with two attributes 'width','height' both being 700px each",()=>{
    render(<LandingPage/>)
    let TetrisGridContainer= screen.getByTestId("TetrisGridContainer")
    // console.log(getComputedStyle(TetrisGridContainer).width)
    expect(getComputedStyle(TetrisGridContainer).width).toBe("700px")

  })

  
})

