import { reactive } from 'vue';
export const store = reactive({
  accounts: [
    {
      name: 'Marco',
      
    }
  ]
  getImgUrl: 'https://api.themoviedb.org/3/configuration',
  imgInfo: {},
  apiUrl: 'https://api.themoviedb.org/3/search/',
  selectedMedia: 'multi',
  apiKey: '4f166f04fc497eef28ad33fc0f0aceac',
  searchBarString: '',
  searchResult: []
});