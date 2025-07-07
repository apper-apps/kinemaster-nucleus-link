import blogData from '@/services/mockData/blogPosts.json';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const blogService = {
  async getAll() {
    await delay(300);
    return [...blogData];
  },

  async getById(id) {
    await delay(200);
    const post = blogData.find(p => p.Id === id);
    if (!post) {
      throw new Error('Blog post not found');
    }
    return { ...post };
  },

  async create(post) {
    await delay(400);
    const newPost = {
      ...post,
      Id: Math.max(...blogData.map(p => p.Id)) + 1
    };
    blogData.push(newPost);
    return { ...newPost };
  },

  async update(id, data) {
    await delay(350);
    const index = blogData.findIndex(p => p.Id === id);
    if (index === -1) {
      throw new Error('Blog post not found');
    }
    blogData[index] = { ...blogData[index], ...data };
    return { ...blogData[index] };
  },

  async delete(id) {
    await delay(300);
    const index = blogData.findIndex(p => p.Id === id);
    if (index === -1) {
      throw new Error('Blog post not found');
    }
    const deleted = blogData.splice(index, 1)[0];
    return { ...deleted };
  }
};

export default blogService;