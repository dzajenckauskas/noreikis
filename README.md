# Noreikis - Real Estate Broker Page

## Overview
Noreikis is a real estate broker website designed to showcase estate listings and generate leads through optimized search engine visibility. The platform provides a user-friendly experience for browsing real estate advertisements while ensuring high performance and scalability.

Website: [www.noreikis.com](https://www.noreikis.com)

## Tech Stack
- **Frontend:** React, Next.js, TypeScript
- **Backend:** Strapi CMS (Headless CMS)
- **Database:** PostgreSQL
- **Deployment:** VPS (Linux-based)

## Features
- **Real estate listings** dynamically managed via Strapi CMS.
- **SEO-optimized architecture** with Next.js for improved search rankings.
- **Lead generation system** to capture potential clients from Google searches.
- **Responsive design** for seamless browsing on all devices.
- **Fast-loading pages** with server-side rendering and caching optimizations.

## Setup & Installation
### Prerequisites
Ensure you have the following installed:
- Node.js (>= 16.x)
- npm or yarn
- PostgreSQL

### Installation Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/dzajenckauskas/noreikis.git
   cd noreikis
   ```
2. Install dependencies:
   ```sh
   npm install  # or yarn install
   ```
3. Set up environment variables:
   - Create a `.env.local` file in the root directory.
   - Add necessary environment variables (e.g., Strapi API keys, database connection).
4. Start the development server:
   ```sh
   npm run dev  # or yarn dev
   ```
5. Access the app at `http://localhost:3000`.

## Deployment
- The project is deployed on a VPS with Nginx as a reverse proxy.
- Uses **PM2** for process management.
- CI/CD automation with **GitHub Actions**.

## Future Improvements
- Implement **advanced filtering and search** for real estate listings.
- Improve **UI/UX** with refined design and better lead capture forms.
- Add **multi-language support** to reach a broader audience.

## Contributing
Contributions are welcome! Feel free to fork the repo, submit issues, or suggest improvements.

## License
This project is licensed under the MIT License.

---
For any inquiries or collaborations, reach out via [GitHub](https://github.com/dzajenckauskas/).

