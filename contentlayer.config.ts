  import { defineDocumentType, makeSource } from 'contentlayer2/source-files'

  export const Post = defineDocumentType(() => ({
    name: 'Post',
    filePathPattern: `posts/**/*.mdx`,
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
        resolve: (post) => `/${post._raw.flattenedPath}`,
      },
      image: {
        type: 'string',
        resolve: (post) => (post.image ?? '').trimEnd(),
      },
    }    
  }))
  export const Page = defineDocumentType(() => ({
    name: 'Page',
    filePathPattern: `pages/*.mdx`,
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
        resolve: (post) => `/${post._raw.flattenedPath}`,
       },
      image: { 
        type: 'string', 
        resolve: (post) => (post.image ?? '').trimEnd(),
      },
      },
  }))

  export default makeSource({ contentDirPath: 'content', documentTypes: [Post, Page] })