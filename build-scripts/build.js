import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';
import { stat } from 'fs';

process.env.NODE_ENV = 'production';

console.log(chalk.blue('Generating minified bundle for production. This will take a moment...'));

webpack(webpackConfig).run((error, stats) => {
  if(error){
    console.log(chalk.red(error));
    return 1;
  }
  const jsonStats = stats.toJson();

  if(jsonStats.errors){
    return jsonStats.errors.map(error => console.log(chalk.red(error)));
  }

  if(jsonStats.warnings){
    console.log(chalk.yellow('Webpack generated the following warnings: '));
    jsonStats.warnings.map( warning => console.log(chalk.yellow(warning)));
  }

  console.log(`Webpack stats: ${jsonStats}`);

  console.log(chalk.green('Your app has been built for production and written to dist!'));

  return 0;
});
