const MoviesEndpoint = require("../../api/movies-endpoint");
const ApiResponseValidator = require("../../utilities/response-validator");
const testData = require("../../data/test-data");

describe("API Tests for Movies", () => {
  it("should return a paginated list of movies when GET /api/movies/ is called", async () => {
    const response = await MoviesEndpoint.getPaginatedMovies();

    ApiResponseValidator.validateResponse(response);
    ApiResponseValidator.validateEntityFields(response, 'movie');
    ApiResponseValidator.validatePaginatedResponse(response);
  });

  it("should return movie details when GET /api/movies/{movieId} is called", async () => {
    const response = await MoviesEndpoint.getMovieById(testData.movie.id);

    ApiResponseValidator.validateStatus(response);
    ApiResponseValidator.validateEquality(response.data, testData.movie);

    console.log(`GET /api/movies/${testData.movie.id}: Received movie details of ${response.data.title}`);
  });

  it("should return similar movies when GET /api/movies/{movieId}/similar is called", async () => {
    const response = await MoviesEndpoint.getSimilarMovies(testData.movie.id);

    ApiResponseValidator.validateResponse(response);
    ApiResponseValidator.validateEntityFields(response, 'movie');

    console.log(`GET /api/movies/${testData.movie.id}/similar: Received ${response.data.content.length} similar movies`);
  });

  it("should return featured movies when GET /api/movies/featured is called", async () => {
    const response = await MoviesEndpoint.getFeaturedMovies();

    ApiResponseValidator.validateResponse(response);
    ApiResponseValidator.validateEntityFields(response, 'movie');
    
    console.log(`GET /api/movies/featured: Received ${response.data.length} featured movies`);
  });

  it("should return upcoming movies when GET /api/movies/upcoming is called", async () => {
    const response = await MoviesEndpoint.getUpcomingMovies();
  
    ApiResponseValidator.validateResponse(response);
    ApiResponseValidator.validateEntityFields(response, 'movie');

    console.log(`GET /api/movies/upcoming: Received ${response.data.content.length} upcoming movies`);
  });
  
  it("should return currently showing movies when GET /api/movies/currently-showing is called", async () => {
    const response = await MoviesEndpoint.getCurrentlyShowingMovies();
     
    ApiResponseValidator.validateResponse(response);
    ApiResponseValidator.validateEntityFields(response, 'movie');
    console.log(`GET /api/movies/currently-showing: Received ${response.data.content.length} currently showing movies`);
  });

  it("should return currently showing movies with 'Action' genre when GET /api/movies/currently-showing is called", async () => {
    const filters = { genres: 'Action'}; 
    const response = await MoviesEndpoint.getCurrentlyShowingMovies(0, 4, filters);
  
    ApiResponseValidator.validateResponse(response);
    ApiResponseValidator.validatePaginatedResponse(response);

    const movieCount = response.data.content.length;
    if (movieCount === 0) {
      console.log("No currently showing movies with 'Action' genre found.");
      return;
    }
  
    response.data.content.forEach(movie => {
      ApiResponseValidator.validateEntityFields({ data: movie }, 'movie');
  
      const movieGenres = movie.genres;
      ApiResponseValidator.isArray(movieGenres);
  
      const actionGenreFound = movieGenres.some(genre => genre.name === filters.genres);
      expect(actionGenreFound).toBe(true);
    });
  });
});