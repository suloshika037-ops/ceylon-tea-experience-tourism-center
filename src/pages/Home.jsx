function Home() {
  return (
    <main className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold">
          Ceylon Tea Experience & Tourism Center
        </h1>

        <p className="lead">
          Discover the beauty, culture, and heritage of Ceylon Tea.
        </p>
      </div>

      <div className="row g-4">
        <div className="col-12 col-md-4">
          <div className="card h-100 p-3">
            <h3>🍃 Tea Regions</h3>
            <p>
              Explore the famous tea-growing regions of Sri Lanka.
            </p>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card h-100 p-3">
            <h3>☕ Tea Experiences</h3>
            <p>
              Enjoy tea tasting, plantation visits, and factory tours.
            </p>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card h-100 p-3">
            <h3>🌿 Tea Culture</h3>
            <p>
              Discover the history and rich culture of Ceylon Tea.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home