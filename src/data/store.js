import { reactive } from 'vue';
export const store = reactive({
  apiUrl: 'https://api.themoviedb.org/3/search/movie',
  apiKey: '4f166f04fc497eef28ad33fc0f0aceac',
  searchBarString: '',
  searchResult: []
});