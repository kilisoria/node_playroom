import chalk from "chalk";

process.on('exit', code => {
    console.log('About to exit with code:', code);

    console.log('VERSION', process.version);
    console.log('PLATFORM', process.platform);
    console.log('PID', process.pid);
    console.log('TITLE', process.title);
    console.log(chalk.red('Current working Directory'), process.cwd());
    console.log('MEMORY', process.memoryUsage());
    console.log(chalk.bgMagenta(`VARIABLE ENV ${process.env.SERVER}`))
});

process.on('beforeExit', code => {
    console.log('Before...', code);
});

process.on('uncaughtException', () => {
    console.log('uy');
});

for (let index = 0; index < 1000000; index++) {
    console.log('index', index);
    throw Error('2');
}

