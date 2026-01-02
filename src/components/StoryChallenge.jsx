import '../styles/StoryChallenge.css'

export default function StoryChallenge() {
  return (
    <section className="story-challenge">
      <div className="challenge-container">
        <div className="challenge-header">
          <h2 className="challenge-title">THE CHALLENGE</h2>
          <div className="challenge-line"></div>
        </div>

        <div className="challenge-columns">
          <div className="challenge-column">
            <p className="challenge-text">
              Mary and Sam had stable jobs, a beautiful home and two young boys under the age of 5. Despite all of this, they were struggling to feel confident in their financial future.
            </p>
          </div>

          <div className="challenge-column">
            <p className="challenge-text highlight">
              They had a number of financial goals, including reducing their debt load, saving for their children's post-secondary education, and investing for retirement, but didn't know where to start.
            </p>
          </div>

          <div className="challenge-column">
            <p className="challenge-text">
              They were also concerned about the potential loss or reduction of one or both of their incomes, which could jeopardize their ability to achieve their goals and provide for their family.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
