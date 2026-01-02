import '../styles/StoryChallenge.css';
import PropTypes from 'prop-types';

export default function StoryJourney({ title, columns }) {
  return (
    <section className="story-challenge">
      <div className="challenge-container">
        {title ? (
          <div className="challenge-header">
            <h2 className="challenge-title">{title}</h2>
            <div className="challenge-line"></div>
          </div>
        ) : null}
        <div className="challenge-columns">
          {columns.map((col, idx) => (
            <div className="challenge-column" key={idx}>
              {col.title && (
                <>
                  <h3 style={{ fontWeight: 'bold' }}>{col.title}</h3>
                  <br />
                </>
              )}
              {col.paragraphs && col.paragraphs.map((p, i) => (
                p.text && p.text.trim() !== '' ? (
                  <>
                    <p
                      key={i}
                      className={p.bold ? 'challenge-text highlight' : 'challenge-text'}
                      style={p.bold ? { fontWeight: 'bold' } : {}}
                    >
                      {p.text}
                    </p>
                    {i < col.paragraphs.length - 1 && <><br /><br /></>}
                  </>
                ) : null
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

StoryJourney.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      paragraphs: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string.isRequired,
          bold: PropTypes.bool
        })
      )
    })
  ).isRequired
};
