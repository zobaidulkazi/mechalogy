import React from 'react'


export const metadata = {
    title: 'Welcomr Books Page',
    description: 'Generated by create next app',
  }



const  BookLayout = ({
    children, 
}) => {
  return (
    <section>
        {children}
    </section>
  )
}

export default BookLayout