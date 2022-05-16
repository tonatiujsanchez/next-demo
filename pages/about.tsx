import Link from 'next/link'
import { ReactElement } from 'react'
import DarkLayout from '../components/layouts/DarkLayout'
import MainLayout from '../components/layouts/MainLayout'



const AboutPage = () => {

    return (
        <>
            <h1>About Page</h1>
            <h2 className='title'>
                Ir a <Link href="/">Home</Link>
            </h2>
            <p className='description'>
                Get started by editing{' '}
                <code className='code'>pages/about.jsx</code>
            </p>
        </>

    )
}

AboutPage.getLayout = function getLayout( page: ReactElement ) {
    return (
        <MainLayout>
            <DarkLayout>
                { page }
            </DarkLayout>
        </MainLayout>
    )
}

export default AboutPage