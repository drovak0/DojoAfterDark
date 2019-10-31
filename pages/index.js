import Head from "next/head"
import React from "react"

const Home = () => {
  console.log("Welcome to Dojo After Dark!")
  console.log(`
                                        )
                              )      ((     (
                            (        ))     )
                      )       )      //     (
                _   (        __    (     ~->>
          ,-----' |__,_~~___<'__')-~__--__-~->> <
          | //  : | -__   ~__ o)____)),__ - '> >-  >
          | //  : |- \_ \ -\_\ -\ \ \ ~\_  \ ->> - ,  >>
          | //  : |_~_\ -\__\ \~'\ \ \, \__ . -<-  >>
          '-----._| '  -__'-- - ~~ -- ' --~> >
          _/___\_    //)_'//  | ||]
    _____[_______]_[~~-_ (.L_/  ||
    [____________________]' '\_,/'/
      ||| /          |||  ,___,'./
      ||| \          |||,'______|
      ||| /          /|| I==||
      ||| \       __/_||  __||__
  -----||-/------'-._/||-o--o---o---
    ~~~~~'
  `)
  console.log("Congratulations for passing the first test!")
  console.log("Here are your next set of challenges")
  console.log("Task #1 Find the RSVP element")
  console.log("Task #2 Display the element")
  console.log("Task #3 Submit the RSVP")

  return (
    <>
      <Head>
        <title>Dojo After Dark</title>
      </Head>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <h1>dojo<br /> after<br /> dark</h1>
        <style global jsx>{`
          @import url(https://fonts.googleapis.com/css?family=Exo+2:200i);

          :root {
            /* Base font size */
            font-size: 10px;
            
            /* Set neon color */
            --neon-text-color: #f40;
            --neon-border-color: #08f;
          }

          body {
            font-family: 'Exo 2', sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;  
            background: #000;
            min-height: 100vh;
          }

          h1 {
            font-size: 13rem;
            font-weight: 200;
            font-style: italic;
            color: #fff;
            padding: 4rem 6rem 5.5rem;
            border: 0.4rem solid #fff;
            border-radius: 2rem;
            text-transform: uppercase;
            animation: flicker 1.5s infinite alternate;
          }

          h1::-moz-selection {
            background-color: var(--neon-border-color);
            color: var(--neon-text-color);
          }

          h1::selection {
            background-color: var(--neon-border-color);
            color: var(--neon-text-color);
          }

          h1:focus {
            outline: none;
          }

          /* Animate neon flicker */
          @keyframes flicker {
              
              0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
                
                  text-shadow:
                      -0.2rem -0.2rem 1rem #fff,
                      0.2rem 0.2rem 1rem #fff,
                      0 0 2rem var(--neon-text-color),
                      0 0 4rem var(--neon-text-color),
                      0 0 6rem var(--neon-text-color),
                      0 0 8rem var(--neon-text-color),
                      0 0 10rem var(--neon-text-color);
                  
                  box-shadow:
                      0 0 .5rem #fff,
                      inset 0 0 .5rem #fff,
                      0 0 2rem var(--neon-border-color),
                      inset 0 0 2rem var(--neon-border-color),
                      0 0 4rem var(--neon-border-color),
                      inset 0 0 4rem var(--neon-border-color);
              }
              
              20%, 24%, 55% {
                  text-shadow: none;
                  box-shadow: none;
              }
          }
      `}</style>
      </div>
    </>
  )
}

export default Home
