import { type BuildOptions } from './types/config'
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'

export function buildDevServer (options: BuildOptions): DevServerConfiguration {
    return {
        port: options.port,
        open: true,
        historyApiFallback: true, // для того чтоб при обновлении страницы не выподала ошибка Cannot GET если мы находимся не наглавной
        hot: true
    }
}
