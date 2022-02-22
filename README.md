
<h1 align="center"> <u> Tetris In Typescript Testings</u> </h1>

<h2 align="center"> <u> Plan of action Tetris (Height level) </u> </h2>

1. Create a <u> List of steps </u> that i would need todo to make said tetris game.

2. For Each Step do TDD on what is needed

4. Try to use Typescript as much as possible.
 (LAWS-no setting types as any, nomatter the cost)

---
<br>
<h1 align="center"> <u> List of steps </u> </h1>

 <details open>
<summary> step by step git by git </summary>
<br>

- TDD Screen-Layout
  - create a <main.> with a of arround 700w x700h
  - An Array of Object's 0-9  ( 10 columns )
  - Each object holds 10 key/values -> ( 0:false to 9:false )
    - keys are numeric 
    - values are booleans
  - Map Through each object and on each object map through each keyValue Pair.
  - for Each key value pair mapped through return a div box that is 10%heigh and 10% width in a column (bottom to top [0-9])


  <br><br>
- TDD Tetris Shape 
  - Create a function called CreateShape that takes in two parameters (rownumber,columnNumber)
  - Using CreateShape function change the key value's of the shape/boxs to be true starting from the center top of the screen (rows/column) also saving both params to an array ().
  <br><br>

- TDD Tetris Collision
  - Create a function that moves the last peace down by 1 untill it hits a filled or bottom of the screen e:g (row:0)

</details>


<h1 align="center"> <u> Dependencies </u> </h1>

 <details >
<summary> Installations & Dependencies </summary>
<br>

- StoryBook

</details>

