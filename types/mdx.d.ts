declare module "*.mdx" {
  let frontmatter: any;
  let defaultExport: React.ComponentType;
  export { frontmatter };
  export default defaultExport;
}
