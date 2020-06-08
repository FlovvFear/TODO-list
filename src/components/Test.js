import React from 'react'

function test2 () {
    console.log("Hello, World!")
    const a = name => {
        console.log(`Hello from ${name}`)
    }
    
    const b = cb => {
        cb('Artem again')
    }
    b(a)
}

function Test  () {
    test2()
    return (
        <div>
            
            Test
        </div>
    )
}

export default Test;