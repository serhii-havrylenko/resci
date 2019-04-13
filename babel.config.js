module.exports = api => {
  api.cache(false);

  return {
    presets: [['react-app', { flow: true, typescript: false }]],
    plugins: [['@babel/plugin-proposal-decorators', { legacy: true }]],
  };
};
