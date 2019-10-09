import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';

import alias from 'rollup-plugin-alias';
import json from 'rollup-plugin-json';
import postcss from 'rollup-plugin-postcss';
import autoPreprocess from 'svelte-preprocess';

const production = !process.env.ROLLUP_WATCH;

// see https://github.com/kaisermann/svelte-preprocess/issues/48


// see https://github.com/sveltejs/sapper/issues/474
const preprocessOptions = {
  scss: {
    includePaths: [
      'node_modules',
      'src'
    ]
  },
}

export default {
	input: 'src/main.js',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'app',
		file: 'public/bundle.js'
	},
	plugins: [
		svelte({
			// enable run-time checks when not in production
			dev: !production,
			// we'll extract any component CSS out into
			// a separate file — better for performance
			css: css => {
				css.write('public/bundle.css');
      },
      preprocess: autoPreprocess( preprocessOptions ),
  
    }),
    postcss(),

		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration —
		// consult the documentation for details:
		// https://github.com/rollup/rollup-plugin-commonjs
		resolve({
			browser: true,
			dedupe: importee => importee === 'svelte' || importee.startsWith('svelte/')
    }),
    alias({
      resolve: [ '.js', '.json', '.scss', '.svelte' ],
      entries:[
        { find: /^src/, replacement: __dirname + '/src' } 
      ],
    }),
    commonjs(),
    json(),

		// Watch the `public` directory and refresh the
		// browser on changes when not in production
		!production && livereload('public'),

		// If we're building for production (npm run build
		// instead of npm run dev), minify
		production && terser()
	],
	watch: {
		clearScreen: false
  },

  // see https://github.com/d3/d3-selection/issues/168
  onwarn: function (warning, warn) {
    if (warning.code === 'CIRCULAR_DEPENDENCY') return;
    warn(warning);
  }
  
};
