import { Response } from 'miragejs';

let tags = [];

export default function () {
  this.urlPrefix = '';
  this.namespace = '';
  this.timing = 400;

  this.get('/posts/:id', () => {
    tags.push({
      name: `tag n°${tags.length + 1}`,
    });
    return new Response(
      200,
      {},
      {
        data: {
          id: '1',
          type: 'post',
          attributes: {
            tags: tags,
          },
        },
      }
    );
  });
}
