import { useEffect, useState } from 'react'

function ResourcePage({ load, resource, title, description }) {
  const [items, setItems] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    let active = true
    load()
      .then((data) => active && setItems(data))
      .catch((requestError) => active && setError(requestError.message))
    return () => { active = false }
  }, [load, resource])

  return (
    <section className="resource-page">
      <p className="eyebrow">{resource.toUpperCase()}</p>
      <h1>{title}</h1>
      <p className="description">{description}</p>
      {error ? <p className="notice error">{error}</p> : null}
      {!error && items.length === 0 ? <p className="notice">No {resource} to show yet.</p> : null}
      {items.length > 0 ? (
        <div className="data-grid">
          {items.map((item, index) => (
            <article className="data-item" key={item.id || item._id || index}>
              <strong>{item.name || item.title || item.username || `Entry ${index + 1}`}</strong>
              <span>{item.description || item.type || item.email || 'Details available in the API response.'}</span>
            </article>
          ))}
        </div>
      ) : null}
    </section>
  )
}

export default ResourcePage