import { getAllByTestId, render, screen } from "@testing-library/react"
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
  it("should contain 100 square divs",()=>{
    render(<LandingPage/>)
    let TetrisBoxs=screen.getAllByTestId("Tetris-box")
    expect(TetrisBoxs).toHaveLength(100)
  }) 

  // it("should create an L shap block on the crid",()=>{
  //   render(<LandingPage />)
  //   let TetrisBoxs=screen.getAllByTestId("Tetris-box")
  //   expect(TetrisBoxs).toHaveLength(100)
  // }) 

})

