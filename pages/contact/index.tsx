import Link from 'next/link'
import MainLayout from '../../components/layouts/MainLayout'


const ContactPage = () => {
  return (

    <MainLayout>
        <h1>Contact Page</h1>
        <h2 className='title'>
            Ir a <Link href="/">Home</Link>
        </h2>

        <p className='description'>
            Get started by editing{' '}
            <code className='code'>pages/contact.jsx</code>
        </p>

    </MainLayout>

  )
}

export default ContactPage