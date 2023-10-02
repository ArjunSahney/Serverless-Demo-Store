import React, { useContext, useEffect, useState } from 'react'
import { SettingsContext } from '../settings'
import { ProductTypes } from '../types'
import ProductsList from '../components/ProductsList'

function Home () {
  const settings = useContext(SettingsContext)
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState<ProductTypes[]>([])
  const [error, setError] = useState<Error>()

  useEffect(() => {
    (async () => {
      try {
        let url = `${settings.apiBaseUrl}/products`
        if (!settings.apiBaseUrl) {
          console.warn('Running in MOCK mode (using mock data)')
          url = `${window.location.origin}/mock/products.json`
        }
        const response = await fetch(url, { mode: 'cors' })
        const loadedProduct = (await response.json()) as ProductTypes[]
        setLoading(false)
        setProducts(loadedProduct)
      } catch (err) {
        setLoading(false)
        setError(err as Error)
      }
    })()
  }, [])

  if (loading) {
    return <div style={{ textAlign: 'center' }}>Loading...</div>
  }

  if (error) {
    return <div style={{ color: 'red' }}><pre>{JSON.stringify(error)}</pre></div>
  }

  return <ProductsList products={products} />
}

export default Home
