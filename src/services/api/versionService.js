import versionData from '@/services/mockData/versions.json';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const versionService = {
  async getAll() {
    await delay(300);
    return [...versionData];
  },

  async getById(id) {
    await delay(200);
    const version = versionData.find(v => v.Id === id);
    if (!version) {
      throw new Error('Version not found');
    }
    return { ...version };
  },

  async create(version) {
    await delay(400);
    const newVersion = {
      ...version,
      Id: Math.max(...versionData.map(v => v.Id)) + 1
    };
    versionData.push(newVersion);
    return { ...newVersion };
  },

  async update(id, data) {
    await delay(350);
    const index = versionData.findIndex(v => v.Id === id);
    if (index === -1) {
      throw new Error('Version not found');
    }
    versionData[index] = { ...versionData[index], ...data };
    return { ...versionData[index] };
  },

  async delete(id) {
    await delay(300);
    const index = versionData.findIndex(v => v.Id === id);
    if (index === -1) {
      throw new Error('Version not found');
    }
    const deleted = versionData.splice(index, 1)[0];
    return { ...deleted };
  }
};

export default versionService;