import React from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'

function Home() {
    return (
        <section>
            <div class="container-fluid" >
                <h1 class="mt-5">Welcome</h1>
                <p>Hello Home </p>
                <Link to='/'>From Home page</Link>
                <Link to='/Nav'>From Login pages</Link>

            </div>
        </section>
    )
}

export default Home