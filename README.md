<br/>
<p align="center">
  <a href="https://github.com/mikias-tulu/bookstore-backend">
    <img src="https://i.pinimg.com/originals/3c/7a/f3/3c7af3c03a1fc34f679d6cb8d1af703a.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Bookstore Backend</h3>

  <p align="center">
    Bookstore Backend: Powering Your Bookstore API
    <br/>
    <br/>
    <a href="https://github.com/mikias-tulu/bookstore-backend"><strong>Explore the docs »</strong></a>
    <br/>
    <br/>
    <a href="https://github.com/mikias-tulu/bookstore-backend">View Demo</a>
    .
    <a href="https://github.com/mikias-tulu/bookstore-backend/issues">Report Bug</a>
    .
    <a href="https://github.com/mikias-tulu/bookstore-backend/issues">Request Feature</a>
  </p>
</p>

![Downloads](https://img.shields.io/github/downloads/mikias-tulu/bookstore-backend/total) ![Contributors](https://img.shields.io/github/contributors/mikias-tulu/bookstore-backend?color=dark-green) ![Forks](https://img.shields.io/github/forks/mikias-tulu/bookstore-backend?style=social) ![Stargazers](https://img.shields.io/github/stars/mikias-tulu/bookstore-backend?style=social) ![Issues](https://img.shields.io/github/issues/mikias-tulu/bookstore-backend) ![License](https://img.shields.io/github/license/mikias-tulu/bookstore-backend) 

## Table Of Contents

* [About the Project](#about-the-project)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Contributing](#contributing)
* [Authors](#authors)


## About The Project

This project serves as the backend server for a bookstore application. It facilitates critical functionalities including user registration, authentication, book management (creation, updating, retrieval, and deletion), user administration, and order management, including order cancellation.

## Getting Started

Follow these steps to set up the project locally:

### Prerequisites


* npm

```sh
npm install npm@latest -g
```

### Installation

* Clone the Repository

```bash
git clone https://github.com/mikias-tulu/bookstore-backend
```
* Configure Environment Variables

```
cp .env.example .env
```
* Set values for each variable in the '.env' file
* Install Dependencies 
```
npm install
```

* Database Migration

```
npx prisma migrate dev --name init
```
```
npx prisma generate
```

* Run the Project
```
npm run dev
```

### Contributing
### Creating A Pull Request

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Authors

* **Mikias Tulu** - *Full Stack Developer* - [Mikias Tulu](https://github.com/mikias-tulu) - **


