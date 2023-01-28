

function KursCard({kurs}) {
  return (
    <div className="col-md-6">
      <div className="card mb-3">
        <div className="card-body">
            <div className="d-flex justify-content-between align-item-center">
                <h5 className="card-title">{kurs.isim}</h5>
                <a className="btn btn-primary" href={`/kurslar/${kurs.id}`}>
                    İncele
                </a>
            </div>
            <p className="small">
                Durum: <strong>{kurs.durum}</strong>
            </p>
        </div>
      </div>
    </div>
  )
}

export default KursCard
