import path from 'path';

const pathBuilder = (filepath) => {
  const currentPath = process.cwd();
  const rootDir = currentPath[0];
  if (filepath[0] === '/') {
    return path.resolve(rootDir, filepath);
  }
  return path.resolve(filepath);
};
export default pathBuilder;
