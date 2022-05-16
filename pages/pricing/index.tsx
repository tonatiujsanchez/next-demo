import Link from 'next/link'
import MainLayout from '../../components/layouts/MainLayout'


const PricingPage = () => {
  return (

    <MainLayout>
        <h1>Pricing Page</h1>
        <h2 className='title'>
            Ir a <Link href="/">Home</Link>
        </h2>

        <p className='description'>
            Get started by editing{' '}
            <code className='code'>pages/pricing.jsx</code>
        </p>

    </MainLayout>

  )
}

export default PricingPage