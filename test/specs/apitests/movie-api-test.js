const MoviesEndpoint = require("../../api/movies-endpoint");
const ApiResponseValidator = require("../../utilities/response-validator");
const testData = require("../../data/test-data");
const fieldDefinitions = require("../../data/field-definitions");

describe("API Tests for Movies", () => {
  it("should return a paginated list of movies when GET /api/movies/ is called", async () => {
    const response = await MoviesEndpoint.getPaginatedMovies();

    ApiResponseValidator.validateStatus(response, 200);
    ApiResponseValidator.validateArrayResponse(response);
    
    if (response.data.content.length > 0) {
      ApiResponseValidator.validateMovieFields(response);
    }
    ApiResponseValidator.validatePaginatedResponse(response);
  });

  it("should return movie details when GET /api/movies/{movieId} is called", async () => {
    const { movie: expectedMovie } = testData;
    const response = await MoviesEndpoint.getMovieById(expectedMovie.id);

    ApiResponseValidator.validateStatus(response, 200);
    console.log(`GET /api/movies/${expectedMovie.id}: Received movie details of ${response.data.title}`);

    expect(response.data).toEqual(expectedMovie);
  });

  it("should return similar movies when GET /api/movies/{movieId}/similar is called", async () => {
    const movieId = testData.movie.id;
    const response = await MoviesEndpoint.getSimilarMovies(movieId);

    ApiResponseValidator.validateStatus(response, 200);
    ApiResponseValidator.validateArrayResponse(response);
    
    console.log(`GET /api/movies/${movieId}/similar: Received ${response.data.content.length} similar movies`);

    if (response.data.content.length > 0) {
      ApiResponseValidator.validateMovieFields(response);
    }
  });

  it("should return featured movies when GET /api/movies/featured is called", async () => {
    const response = await MoviesEndpoint.getFeaturedMovies();

    ApiResponseValidator.validateStatus(response, 200);
    ApiResponseValidator.validateArrayResponse(response);
    
    console.log(`GET /api/movies/featured: Received ${response.data.length} featured movies`);
    
    if(response.data.length > 0) {
      ApiResponseValidator.validateMovieFields(response)
    }
  });

  it("should return upcoming movies when GET /api/movies/upcoming is called", async () => {
    const response = await MoviesEndpoint.getUpcomingMovies();
  
    ApiResponseValidator.validateStatus(response, 200);
  
    if (response.data.content.length > 0) {
      console.log(`GET /api/movies/upcoming: Received ${response.data.content.length} upcoming movies`);
  
      if (response.data.content.length > 0) {
        ApiResponseValidator.validateMovieFields(response);
      }
    }
    else {
      console.log("GET /api/movies/upcoming: No upcoming movies found");
      expect(response.data.content).toEqual([]);
    }
  });
  
  it("should return currently showing movies when GET /api/movies/currently-showing is called", async () => {
    const response = await MoviesEndpoint.getCurrentlyShowingMovies();
     
    ApiResponseValidator.validateStatus(response, 200);
    ApiResponseValidator.validateArrayResponse(response);

    console.log(`GET /api/movies/currently-showing: Received ${response.data.content.length} currently showing movies`);
    
    if(response.data.content.length > 0){
      ApiResponseValidator.validateMovieFields(response);
    }
  });

  it("should return currently showing movies with 'Action' genre when GET /api/movies/currently-showing is called", async () => {
    const filters = { genres: 'Action'}; 
    const response = await MoviesEndpoint.getCurrentlyShowingMovies(0, 4, filters);
  
    ApiResponseValidator.validateStatus(response, 200);
    ApiResponseValidator.validateArrayResponse(response);
    ApiResponseValidator.validatePaginatedResponse(response);

    const movieCount = response.data.content.length;
    if (movieCount === 0) {
      console.log("No currently showing movies with 'Action' genre found.");
      return;
    }
  
    response.data.content.forEach(movie => {
      ApiResponseValidator.validateFields({ data: movie }, fieldDefinitions.movieFields);
  
      const movieGenres = movie.genres;
      ApiResponseValidator.isArray(movieGenres);
  
      const actionGenreFound = movieGenres.some(genre => genre.name === filters.genres);
      expect(actionGenreFound).toBe(true);
    });
  });
});
