import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";
import { Configuration, DefinePlugin } from "webpack";
import webpack from 'webpack';
import { BuildOptions } from "./types/types";
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ReactRefreshWebpack from "@pmmmwh/react-refresh-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";


export function buildPlugins({ mode, paths, platform }: BuildOptions): Configuration['plugins'] {
    const isDev = mode === 'development'
    const plugins: Configuration['plugins'] = [
        new HtmlWebpackPlugin({ template: paths.html }),
        new DefinePlugin({ __PLATFORM__: JSON.stringify(platform) }),
    ]
    if (isDev) {
        plugins.push(new webpack.ProgressPlugin())
        plugins.push(new ForkTsCheckerWebpackPlugin()
        )
        plugins.push(new ReactRefreshWebpack())


    }
    if (!isDev) {
        plugins.push(new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }))
        plugins.push(new BundleAnalyzerPlugin())
        plugins.push(new CopyPlugin({
            patterns: [
                { from: path.resolve(paths.puplic, 'locales'), to: path.resolve(paths.output, 'locales') },
            ],
        }),)
    }
    return plugins
} 