  import { defineDocumentType, makeSource } from 'contentlayer2/source-files'

  export const Post = defineDocumentType(() => ({
    name: 'Post',
    filePathPattern: `**/*.mdx`,
    contentType: 'mdx',
    fields: {
      title: { type: 'string', required: true },
      date: { type: 'date', required: true },
      summary: { type: 'string', required: true },
      image: { type: 'string', required: false},
      author: { type: 'string', required: true},
      category: { type: 'string', required: true},
      readtime: { type: 'string', required: true},
    },
    computedFields: {
      url: { 
        type: 'string', 
        resolve: (post) => `/posts/${post._raw.flattenedPath}` },
      image: { 
        type: 'string', 
        resolve: (post) => (post.image ?? '').trimEnd(),
      },
      },
  }))

  export default makeSource({ contentDirPath: 'posts', documentTypes: [Post] })