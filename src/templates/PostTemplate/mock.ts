import { PostTemplateProps } from '.';
import { mappedData as data } from '../../api/map-data';

export default {
  settings: data.setting,
  post: data.posts[0],
} as PostTemplateProps;
