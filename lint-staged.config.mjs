export default {
  '**/*.{ts,tsx}': ['yarn lint', 'prettier --write'],
  '**/*.{html,json,css,scss,md,mdx}': ['prettier -w'],
};
