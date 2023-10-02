import React, { Fragment, useContext, useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import BuyProductForm from '../components/BuyProductForm'
import { SettingsContext } from '../settings'
import { ProductTypes } from '../types'

function mapUrl(address: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
}

function ProductPage() {
  const params = useParams()
  const settings = useContext(SettingsContext)
  const [loading, setLoading] = useState(true)
  const [product, setproduct] = useState<ProductTypes>()
  const [error, setError] = useState<Error>()

  useEffect(() => {
    (async () => {
      try {
        let url = `${settings.apiBaseUrl}/products/${params.id}`
        if (!settings.apiBaseUrl) {
          console.warn('Running in MOCK mode (using mock data)')
          url = `${window.location.origin}/mock/product/${params.id}.json`
        }
        const response = await fetch(url, { mode: 'cors' })
        const loadedProduct = (await response.json()) as ProductTypes
        setLoading(false)
        setproduct(loadedProduct)
      } catch (err) {
        setLoading(false)
        setError(err as Error)
      }
    })()
  }, [params])

  if (loading) {
    return <div style={{ textAlign: 'center' }}>Loading...</div>
  }

  if (error) {
    return <div style={{ color: 'red' }}><pre>{JSON.stringify(error)}</pre></div>
  }

  if (product) {
    return (
      <div className="container">
        <div>
          <nav className="breadcrumb" aria-label="breadcrumbs">
            <ul style={{ paddingLeft: 10, }}>
              <li><Link to="/">Products</Link></li>
              <li className="is-active">
                <Link to={`/product/${product.id}`}>{product.productName} </Link>
              </li>
            </ul>
          </nav>
          <section className="section" style={{ border: '1px solid #ccc' }}>
            <div className="columns">
              <div className="column is-5">
                <div className="content">
                  <p>
                    <img src={product.image} alt={`${product.productName}'s picture`} style={{ width: '100%' }} />
                  </p>
                </div>
              </div>
              <div className="column is-6">
                <h1 className="title" style={{ fontSize: 40 }}>
                  {product.productName}
                </h1>
                <div className="panel">
                  <div className="panel-block">
                    <strong>{product.price} USD</strong>
                  </div>
                </div>
                <a style={{ borderColor: 'black', color: 'white', backgroundColor: 'black', marginBottom: 20, width: 150, height: 50 }} href="#buy" className="btnn button ">Buy product</a>
                <div className="panel">
                  <p>
                    {product.description}
                  </p>
                </div>
                <div className="panel">
                    <p className="panel-heading">
                      Point
                    </p>
                    <div className="panel-block">
                      <a href={mapUrl(product.collectionPoint)} target="_blank" rel="noreferrer">
                        {product.collectionPoint}
                      </a>
                    </div>
                    <div className="panel-block">
                      {product.date}, {product.collectionTime}&nbsp;<small>Local time</small>
                    </div>
                </div>
              </div>
            </div >
          </section >
          <hr />
          <section id="buy" className="section">
            <BuyProductForm product={product} />
          </section>
        </div >
      </div >
    )
  }

  // This should not happen because we either have a product or an error
  return <Fragment />
}

export default ProductPage
