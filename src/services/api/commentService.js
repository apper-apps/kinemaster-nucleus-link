import commentData from '@/services/mockData/comments.json';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const commentService = {
  async getAll() {
    await delay(300);
    return [...commentData];
  },

  async getById(id) {
    await delay(200);
    const comment = commentData.find(c => c.Id === id);
    if (!comment) {
      throw new Error('Comment not found');
    }
    return { ...comment };
  },

  async getByPostId(postId) {
    await delay(300);
    return commentData.filter(c => c.postId === postId);
  },

  async create(comment) {
    await delay(400);
    const newComment = {
      ...comment,
      Id: Math.max(...commentData.map(c => c.Id)) + 1
    };
    commentData.push(newComment);
    return { ...newComment };
  },

  async update(id, data) {
    await delay(350);
    const index = commentData.findIndex(c => c.Id === id);
    if (index === -1) {
      throw new Error('Comment not found');
    }
    commentData[index] = { ...commentData[index], ...data };
    return { ...commentData[index] };
  },

  async delete(id) {
    await delay(300);
    const index = commentData.findIndex(c => c.Id === id);
    if (index === -1) {
      throw new Error('Comment not found');
    }
    const deleted = commentData.splice(index, 1)[0];
    return { ...deleted };
  }
};

export default commentService;