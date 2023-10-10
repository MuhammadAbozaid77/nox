const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

let APIdata_InitalState = {
    topRatedMovies : [],
    topRatedTv : [],
    trendingMovies : [],
    trendingTv : [],
    movieDetails : [],
    tvDetails : [],
    seasonDeatils : [],
    episodes : [],
    similarMovies : [],
    searchingData : [],
}
/* ---------------------------- Top Rated ----------------------------------------------------------------------------------- */
export let getTopRatedMovies = createAsyncThunk( "apidata slice/getTopRatedMovies" , async (argu , thunkAPI)=>{
    let {rejectWithValue} = thunkAPI
    try {
        let data = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=c5e1d1bc33e817750cc4aeba6192e9f0");
        let data2 = await data.json();
        return data2
    } catch (error) {
        return rejectWithValue(error)
    }
})
export let getTopRatedTv = createAsyncThunk( "apidata slice/getTopRatedTv" , async (argu , thunkAPI)=>{
    let {rejectWithValue} = thunkAPI
    try {
        let data = await fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=c5e1d1bc33e817750cc4aeba6192e9f0");
        let data2 = await data.json();
        return data2
    } catch (error) {
        return rejectWithValue(error)
    }
});
// Simiar Movies
export let getSimilarMovies = createAsyncThunk( "apidata slice/getSimilarMovies" , async (argu , thunkAPI)=>{
    let {rejectWithValue} = thunkAPI
    try {
        let data = await fetch(`https://api.themoviedb.org/3/movie/${argu}/similar?api_key=c5e1d1bc33e817750cc4aeba6192e9f0`);
        let data2 = await data.json();
        return data2
    } catch (error) {
        return rejectWithValue(error)
    }
});

/* ---------------------------- Trending  ------------------------------------------------------------------------------------ */
export let getTrendingMovies = createAsyncThunk( "apidata slice/getTrendingMovies" , async (argu , thunkAPI)=>{
    let {rejectWithValue} = thunkAPI
    try {
        let data = await fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=c5e1d1bc33e817750cc4aeba6192e9f0");
        let data2 = await data.json();
        return data2
    } catch (error) {
        return rejectWithValue(error)
    }
});
export let getTrendingTv = createAsyncThunk( "apidata slice/getTrendingTv" , async (argu , thunkAPI)=>{
    let {rejectWithValue} = thunkAPI
    try {
        let data = await fetch("https://api.themoviedb.org/3/trending/tv/week?api_key=c5e1d1bc33e817750cc4aeba6192e9f0");
        let data2 = await data.json();
        return data2
    } catch (error) {
        return rejectWithValue(error)
    }
});

/* ---------------------------- Details --------------------------------------------------------------------------------------- */
export let getMovieDetails = createAsyncThunk( "apidata slice/getMovieDetails" , async (argu , thunkAPI)=>{
    let {rejectWithValue} = thunkAPI
    try {
        let data = await fetch(`https://api.themoviedb.org/3/movie/${argu}?api_key=c5e1d1bc33e817750cc4aeba6192e9f0`);
        let data2 = await data.json();
        return data2
    } catch (error) {
        return rejectWithValue(error)
    }
});
export let getTvDetails = createAsyncThunk( "apidata slice/getTvDetails" , async (argu , thunkAPI)=>{
    let {rejectWithValue} = thunkAPI
    try {
        let data = await fetch(`https://api.themoviedb.org/3/tv/${argu}?api_key=c5e1d1bc33e817750cc4aeba6192e9f0`);
        let data2 = await data.json();
        return data2
    } catch (error) {
        return rejectWithValue(error)
    }
});
// get Seasom Details
export let getSeasonDetails = createAsyncThunk( "apidata slice/getSeasonDetails" , async (argu , thunkAPI)=>{
    let {rejectWithValue} = thunkAPI
    try {
        let data = await fetch(`https://api.themoviedb.org/3/tv/${argu[0]}/season/${argu[1]}?api_key=c5e1d1bc33e817750cc4aeba6192e9f0`);
        let data2 = await data.json();
        return data2
    } catch (error) {
        return rejectWithValue(error)
    }
});
// get Seasom Details
export let dataSearching = createAsyncThunk( "apidata slice/dataSearching" , async ( {ref,ref2} , thunkAPI)=>{
    let searchWord = ref.current.value ;
    let refSelect = ref2.current.value ;
    let {rejectWithValue} = thunkAPI
    try {
        let data = await fetch(`https://api.themoviedb.org/3/search/${refSelect}?query=${searchWord}&page=1&api_key=c5e1d1bc33e817750cc4aeba6192e9f0`);
        let data2 = await data.json();
        return data2
    } catch (error) {
        return rejectWithValue(error)
    }
});


let apiDataSlice = createSlice({
    name : "apidata slice" ,
    initialState : APIdata_InitalState ,
    reducers : {

    },
    extraReducers : { 
        [getTopRatedMovies.fulfilled] : (state , action)=>{
            state.topRatedMovies = action.payload.results
        },
        [getTopRatedTv.fulfilled] : (state , action)=>{
            state.topRatedTv = action.payload.results
        },
        [getTrendingMovies.fulfilled] : (state , action)=>{
            state.trendingMovies = action.payload.results
        },
        [getTrendingTv.fulfilled] : (state , action)=>{
            state.trendingTv = action.payload.results
        },
        [getMovieDetails.fulfilled] : (state , action)=>{
            state.movieDetails = action.payload
        },
        [getTvDetails.fulfilled] : (state , action)=>{
            state.tvDetails = action.payload
        },
        [getSeasonDetails.fulfilled] : (state , action)=>{
            state.seasonDeatils = action.payload;
            state.episodes = action.payload.episodes;
        },
        [getSimilarMovies.fulfilled] : (state , action)=>{
            state.similarMovies = action.payload.results;
        },
        [dataSearching.fulfilled] : (state , action)=>{
            state.searchingData = action.payload.results;
        },
    }
});


export let apiDataSlice_Reducers = apiDataSlice.reducer ;

