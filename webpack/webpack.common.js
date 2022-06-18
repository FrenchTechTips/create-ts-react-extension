import path from 'path';
import { fileURLToPath } from 'url';
import CopyPlugin from 'copy-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import BuildManifest from './webpack.manifest.cjs';
import CopyWebpackPlugin from 'copy-webpack-plugin';

const srcDir = '../src/';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default env => ({
    entry: {
        popup: path.join(__dirname, srcDir+ 'popup.ts'),
        options:  path.join(__dirname, srcDir + 'options.ts'),
        background:  path.join(__dirname, srcDir + 'background.ts'),
        content:  path.join(__dirname, srcDir + 'content-script.ts'),
    },
    output: {
        path: path.join(__dirname, '../dist/js'),
    },
    optimization: {
        splitChunks: {
            name: 'vendor',
            chunks: 'initial'
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    // disable type checker for user in fork plugin
                    transpileOnly: true
                }
            },
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [{
              from: 'node_modules/webextension-polyfill/dist/browser-polyfill.js',
            }],
          }),
        new ForkTsCheckerWebpackPlugin(),
        new CopyPlugin({
            patterns: [
                {
                    from: '.',
                    to: '../',
                    globOptions: {
                        ignore: ['manifest.json'],
                    },
                    context: './public',
                    filter: async (path) => {
                        return true;
                    },
                    transform(content, path) {
                        return content;
                    }
                }
            ]
        }),
        new BuildManifest({
            browser: env.browser,
            pretty: env.mode === 'production',
            stream: env.stream
        })
    ],
});