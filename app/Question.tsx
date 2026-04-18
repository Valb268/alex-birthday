type ImageData = { src: string; alt: string }

type SlideData = {
  images: ImageData[]
  caption?: string
  captionMdOnly?: boolean
  grid?: boolean
}

type QuestionProps = {
  id: string
  questionNumber: number
  slides: SlideData[]
}

function SlideImages({ images, grid }: { images: ImageData[]; grid?: boolean }) {
  return (
    <div className={grid ? 'slide-images-grid' : 'slide-images'}>
      {images.map(({ src, alt }) => (
        <img key={src} src={src} className="border border-2 border-success" alt={alt} />
      ))}
    </div>
  )
}

export default function Question({ id, questionNumber, slides }: QuestionProps) {
  return (
    <>
      <div className="question_header text-center">שאלה {questionNumber}</div>
      <div className="d-flex justify-content-center">
        <div id={id} className="carousel slide border border-3 border-success mb-5" data-bs-interval="false">
          <div className="carousel-indicators">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                data-bs-target={`#${id}`}
                data-bs-slide-to={i}
                className={i === 0 ? 'active' : ''}
                aria-current={i === 0 ? 'true' : undefined}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
          <div className="carousel-inner">
            {slides.map(({ images, caption, captionMdOnly, grid }, i) => (
              <div key={i} className={`carousel-item text-center my-1${i === 0 ? ' active' : ''}`}>
                <SlideImages images={images} grid={grid} />
                {caption && (
                  <div className={`carousel-caption${captionMdOnly ? ' d-none d-md-block' : ''}`}>
                    <h5 className="qa">{caption}</h5>
                  </div>
                )}
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target={`#${id}`} data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target={`#${id}`} data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  )
}
