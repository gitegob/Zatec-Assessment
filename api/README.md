# Zatec assessment API

This is a website where you can search for 'houses' of Game of Thrones. As a result of the search, the page will show a list of houses that match the search query.

## Running the API

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