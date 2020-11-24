import React from 'react'
import OctocatData from '../OctocatData.json'

export function Octocat() {
  return (
    <>
      <section>
        {OctocatData.data.map((OctocatData) => (
          <article>
            <figure>
              <a href={OctocatData.link}>
                <img
                  src={OctocatData.image}
                  width="400"
                  height="400"
                  alt={OctocatData.name}
                />
              </a>
              <figcaption>
                <p>
                  #{OctocatData.number}:&nbsp;
                  <a href={OctocatData.link}>
                    <strong>{OctocatData.name}</strong>
                  </a>
                </p>
                <ul>
                  {OctocatData.authors.map((author) => (
                    <li>
                      <a href={author.link}>
                        <img src={author.image} width="24" height="24" alt="" />
                      </a>
                    </li>
                  ))}
                </ul>
              </figcaption>
            </figure>
          </article>
        ))}
      </section>
    </>
  )
}
export default Octocat
