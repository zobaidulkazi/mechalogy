import React from 'react'


export const metadata = {
    title: 'Welcomr Blog Page',
    description: 'Generated by create next app',
  }



const  BlogLayout = ({
    children, 
}) => {
  return (
    <section>
        {children}
    </section>
  )
}

export default BlogLayout