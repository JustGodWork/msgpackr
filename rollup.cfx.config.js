import terser from '@rollup/plugin-terser';
import json from "@rollup/plugin-json";

export default {
    input: 'index.js',
    output: {
        file: 'dist/msgpackr.bundle.js',
        format: 'iife',
        name: 'msgpackr',
        globals: {
            'msgpackr': 'msgpackr'
        }
    },
    plugins: [
        json(),
        terser()
    ]
};
