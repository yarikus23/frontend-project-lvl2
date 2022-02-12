import path from 'path';

const pathBuilder = (filepath) => {
  const currentPath = process.cwd();
  const rootDir = currentPath[0];
  let resPath = path.resolve(filepath);
  if (filepath[0] === '/') {
    resPath = path.resolve(rootDir, filepath);
  }
  return resPath;
};
export default pathBuilder;
