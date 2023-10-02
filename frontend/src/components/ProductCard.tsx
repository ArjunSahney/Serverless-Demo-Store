import React from 'react'
import { Link } from 'react-router-dom'
import { ProductTypes } from '../types'

function ProductCard (props: { item: ProductTypes }) {
  const { item } = props

  return <div className="card" style={{ height: '100%' }}>
    <div className="card-image">
      <figure className="image is-3by1">
        <Link to={`/product/${item.id}`}>
          <img className="card-img-top" src={item.image} alt={item.productName} style={{ height: 230, objectFit: 'contain', objectPosition: 'center', paddingTop: 10, paddingBottom: 10 }} />
        </Link>
      </figure>
    </div>
    <div className="card-content">
      <div className="media-content">
        <p className="title is-4">{item.productName}</p>
        <div>
          <span>
            <svg style={{ width: 25, fill: '#FF9529', marginRight: 3, marginTop: -30, marginBottom: 10 }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>  
          </span>
          <span>
            <svg style={{ width: 25, fill: '#FF9529', marginRight: 3, marginTop: -30, marginBottom: 10 }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>  
          </span>
          <span>
            <svg style={{ width: 25, fill: '#FF9529', marginRight: 3, marginTop: -30, marginBottom: 10 }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>  
          </span>
          <span>
            <svg style={{ width: 25, fill: '#FF9529', marginRight: 3, marginTop: -30, marginBottom: 10 }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>  
          </span>
          <span>
            <svg style={{ width: 25, fill: '#FF9529', marginRight: 3, marginTop: -30, marginBottom: 10 }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>  
          </span>
        </div>
        <h3 className='title is-6'>${item.price}</h3>
      </div>
    </div>
  </div>
}

export default ProductCard
