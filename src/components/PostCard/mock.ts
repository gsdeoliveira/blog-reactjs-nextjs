import { data as dataJson } from '../../api/dados.json';

// export default dataJson.posts.data[0].attributes;

export default {
  id: dataJson.posts.data[0].id,
  ...dataJson.posts.data[0].attributes,
};
