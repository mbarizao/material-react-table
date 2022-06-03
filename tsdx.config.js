const commonjs = require('rollup-plugin-commonjs');
const external = require('rollup-plugin-peer-deps-external');
const resolve = require('rollup-plugin-node-resolve');

module.exports = {
  rollup(config) {
    if (config.output.format === 'cjs') {
      config.external = [
        'react',
        'react-dom',
        'react/jsx-runtime',
        '@emotion/react',
        '@emotion/styled',
        '@mui/icons-material',
        '@mui/material',
        '@tanstack/match-sorter-utils',
        '@tanstack/react-table',
      ];
      config.globals = {
        react: 'React',
        'react-dom': 'ReactDOM',
        'react/jsx-runtime': 'ReactJsxRuntime',
        '@emotion/react': 'EmotionReact',
        '@emotion/styled': 'EmotionStyled',
        '@mui/icons-material': 'MuiIconsMaterial',
        '@mui/material': 'MuiMaterial',
        '@tanstack/match-sorter-utils': 'MatchSorterUtils',
        '@tanstack/react-table': 'ReactTable',
      };
      config.plugins.push(
        commonjs({
          include: /node_modules/,
          namedExports: {
            'react-dnd': ['DndProvider', 'useDrag', 'useDrop'],
          },
        }),
        external(),
        resolve(),
      );
    }
    return config;
  },
};
