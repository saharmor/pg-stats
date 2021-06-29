import Head from 'next/head'
import {Grid} from "@material-ui/core";
import LinesTable from "../LinesTable";

const data = [
  {image: "https://web.stanford.edu/class/ee380/Abstracts/090401-blackwell.jpg", name: "John Blackwell", years_supported: 12, essays_reviews: 43},
  {image: "https://web.stanford.edu/class/ee380/Abstracts/090401-blackwell.jpg", name: "John Blackwell", years_supported: 22, essays_reviews: 23},
  {image: "https://web.stanford.edu/class/ee380/Abstracts/090401-blackwell.jpg", name: "John Blackwell", years_supported: 33, essays_reviews: 12},
  {image: "https://web.stanford.edu/class/ee380/Abstracts/090401-blackwell.jpg", name: "John Blackwell", years_supported: 44, essays_reviews: 6},
];

const columns = [" ", "name", "years supported", "essays reviewed"]

export default function Home() {
  return (
    <div className="container">

      <Head>
        <title>PG's Essays Stats</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main>

        <h1 className="title">
          PG's Essays Stats
        </h1>

        <p className="description">
          Based on 205 essays, from 2001-2021
        </p>

        <Grid container direction="row" spacing={2}>
          <Grid item xs={6}>
            <LinesTable header={columns} rows={data}/>
          </Grid>
          <Grid item xs={6}>
            <LinesTable header={columns} rows={data}/>
          </Grid>
        </Grid>
      </main>

      <footer>
        <a href="https://twitter.com/theaievangelist" target="_blank" rel="noopener noreferrer">
          Made by Sahar Mor
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 2rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
          color: #3a3c6b;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
          Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
          sans-serif;
          background-color: #f6f6ef;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
