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
        <img
          src="/static/dojoAfterDarkInauguralMeetupQR.png"
          alt="QR Code"
          style={{ display: "none" }}
        />
      </div>
    </>
  )
}

export default Home
