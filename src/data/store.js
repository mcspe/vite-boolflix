import { reactive } from 'vue';
export const store = reactive({
  accounts: [
    {
      name: 'Marco',
      avatar: 'lightblue'
    },
    {
      name: 'pinco',
      avatar: 'yellow'
    },
    {
      name: 'pallo',
      avatar: 'red'
    },
    {
      name: 'ugo',
      avatar: 'green'
    }
  ],
  activeAccount: {},
  getImgUrl: 'https://api.themoviedb.org/3/configuration',
  imgInfo: {},
  apiUrl: 'https://api.themoviedb.org/3/search/',
  pages: [
    'home',
    'movies',
    'tv shows',
    'my list'
  ],
  selectedMedia: 'multi',
  apiKey: '4f166f04fc497eef28ad33fc0f0aceac',
  apiParams: {
    language: 'it-IT',
    page: 1
  },
  currentApiUrl:'',
  searchBarString: '',
  searchResult: [],
  myList: []
});