# Zatec assessment

This is a website where you can search for 'houses' of Game of Thrones. As a result of the search, the page will show a list of houses that match the search query.

## Getting Started

### Running the API

- Move into the api directory by running

```bash
cd api/
```

- Create file `application.properties` in `src/main/resources` and add this line

```bash
api.got_url=https://www.anapioficeandfire.com/api
```

- Then run the API

```bash
./gradlew bootRun
```

### Running the Frontend

- Move into the frontend directory by running

```bash
cd frontend/
```

- Create file `.env` and add this line

```bash
NEXT_APP_API_URL=http://localhost:8080
```

- Then run the frontend application

```bash
npm run dev
# OR
yarn dev
```
