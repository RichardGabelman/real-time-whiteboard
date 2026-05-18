<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/RichardGabelman/real-time-whiteboard">
    <img src="client/public/whiteboard.svg" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Real-Time Collaborative Whiteboard</h3>

  <p align="center">
    A real-time collaborative whiteboard. Draw, annotate, and create together with live cursors, sticky notes, and instant sync across every connected user.
    <br />
    <br />
    <a href="https://whiteboard.richardgabelman.com">View Live</a>
    &middot;
    <a href="https://github.com/RichardGabelman/real-time-whiteboard/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Whiteboard Screen Shot][whiteboard-screenshot]](https://whiteboard.richardgabelman.com)

<p>
  Real-time collaboration is something most developers interact with daily, Google Docs, Figma, Miro, etc..., but the mechanics underneath are rarely explored firsthand. Keeping multiple users in sync across unreliable connections, scaling that sync across multiple server instances, and resolving the edge cases that emerge when people interact simultaneously are problems worth understanding from the inside out.
</p>
<p>
  <b>Real-Time Collaborative Whiteboard</b> is a full-stack multiplayer canvas where users create boards, draw freely, place sticky notes, and see each other's cursors live. Boards can be password-protected and shared via link, anyone with the URL can join and collaborate instantly.
</p>
<p>
  The core technical challenge is real-time sync across multiple server instances. A single Node.js server can broadcast Socket.io events to all connected clients trivially, but when a load balancer distributes users across two instances, a draw event from a user on instance A never reaches a user on instance B. Redis pub/sub solves this: every instance publishes events to a shared Redis channel and subscribes to receive them, so regardless of which instance a user lands on, all events propagate to all connected clients. This is the architecture that enables horizontal scaling.
</p>
<p>
  The backend is a Node/Express API with two server instances running behind an Nginx load balancer, using Socket.io for WebSocket communication and Redis for cross-instance event broadcasting. Board state, strokes and sticky notes, is persisted to PostgreSQL via Prisma, so joining a board loads its full history. Sessions are lightweight: users claim a display name, receive a session token, and that identity follows them across page refreshes via localStorage.
</p>
<p>
  The frontend is built with React and Vite, using an HTML5 canvas for drawing and CSS Modules for styling. Shared TypeScript types between the client and server define the socket event payloads, catching mismatches at compile time rather than at runtime.
</p>
<p>
  The frontend is deployed on Vercel and the backend runs in Docker containers on a self-managed Hetzner VPS, sitting behind a Caddy reverse proxy that handles SSL automatically. The database is hosted on Neon's serverless PostgreSQL platform.
</p>

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

- [![React][React.js]][React-url]
- ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
- ![Express.js](https://img.shields.io/badge/Express-000?logo=express&logoColor=fff&style=for-the-badge)
- ![Node.js](https://img.shields.io/badge/Node.js-5FA04E?logo=nodedotjs&logoColor=fff&style=for-the-badge)
- ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=fff&style=for-the-badge)
- ![Prisma](https://img.shields.io/badge/Prisma-2D3748?logo=prisma&logoColor=fff&style=for-the-badge)
- ![Hetzner]
- ![Vercel](https://img.shields.io/badge/Vercel-%23000000.svg?logo=vercel&logoColor=white)
- ![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=fff)


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started
To get a local copy up and running follow these steps.
## Prerequisites

- Node.js 22+
- npm
- Docker Desktop with WSL 2 integration enabled (Windows) or Docker Engine (Mac/Linux)

## Installation

1. Clone the repo

```sh
git clone https://github.com/RichardGabelman/real-time-whiteboard.git
```

2. Navigate to the project root and create a .env file

```sh
cd real-time-whiteboard
cp .env.example .env
```

3. Fill in your .env values

```sh
# Dev only (postgres container)
POSTGRES_USER=postgres
POSTGRES_PASSWORD=yourpassword
POSTGRES_DB=whiteboard

# Required everywhere
DATABASE_URL="postgresql://postgres:yourpassword@postgres:5432/whiteboard"
REDIS_URL="redis://redis:6379"
JWT_SECRET="your_jwt_secret"
```

4. Start all services with Docker Compose

```sh
docker compose up --build
```

5. In a separate terminal, run Prisma migrations

```sh
docker compose exec node1 npx prisma migrate dev
```

6. Generate the Prisma client

```sh
docker compose exec node1 npx prisma generate
```
The app will be running at http://localhost. The React client, both Node instances, Redis, Nginx, and PostgreSQL all start automatically via Docker Compose.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Input your name, change the board name, and optionally make the board password protected with a password of your choosing.

<div align=center>
  <img src="images/usage1.png" alt="Whiteboard Create Board UI Screenshot">
</div>

<br />

Join somebody else's board by simply pasting the board link in your browser, inputting a name, and inputting the password (if necessary).

<div align=center>
  <img src="images/usage2.png" alt="Whiteboard Join Board UI Screenshot">
</div>

<br />

Try the live app at https://whiteboard.richardgabelman.com

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Richard Gabelman - [@RichardGabelman](https://twitter.com/RichardGabelman) - hello@richardgabelman.com

Project Link: [https://github.com/RichardGabelman/real-time-whiteboard](https://github.com/RichardGabelman/real-time-whiteboard)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

- [Best-README-Template](https://github.com/othneildrew/Best-README-Template) - for the README template

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/RichardGabelman/real-time-whiteboard.svg?style=for-the-badge
[contributors-url]: https://github.com/RichardGabelman/real-time-whiteboard/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/RichardGabelman/real-time-whiteboard.svg?style=for-the-badge
[forks-url]: https://github.com/RichardGabelman/real-time-whiteboard/network/members
[stars-shield]: https://img.shields.io/github/stars/RichardGabelman/real-time-whiteboard.svg?style=for-the-badge
[stars-url]: https://github.com/RichardGabelman/real-time-whiteboard/stargazers
[issues-shield]: https://img.shields.io/github/issues/RichardGabelman/real-time-whiteboard.svg?style=for-the-badge
[issues-url]: https://github.com/RichardGabelman/real-time-whiteboard/issues
[license-shield]: https://img.shields.io/github/license/RichardGabelman/real-time-whiteboard.svg?style=for-the-badge
[license-url]: https://github.com/RichardGabelman/real-time-whiteboard/blob/main/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/richard-gabelman
[whiteboard-screenshot]: images/screenshot.png
<!-- Shields.io badges. You can a comprehensive list with many more badges at: https://github.com/inttter/md-badges -->
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Hetzner]: https://img.shields.io/badge/Hetzner-D30428?logo=Hetzner&logoColor=white
[Hetzer-url]: https://www.hetzner.com