/* eslint-disable no-console */

import path from 'path';
import fse from 'fs-extra';
import glob from 'glob';

async function copyFolder(folder) {
    const buildPath = path.resolve(__dirname, '../dist/', path.basename(folder));
    await fse.copy(folder, buildPath);
    console.log(`Copied ${folder} to ${buildPath}`);
}


async function copyFile(file) {
    const buildPath = path.resolve(__dirname, '../dist/', path.basename(file));
    await fse.copy(file, buildPath);
    console.log(`Copied ${file} to ${buildPath}`);
}

//function typescriptCopy(from, to) {
//    const files = glob.sync('**/*.d.ts', { cwd: from });
//    const cmds = files.map(file => fse.copy(path.resolve(from, file), path.resolve(to, file)));
//    return Promise.all(cmds);
//}

async function createPackageFile() {
    const packageData = await fse.readFile(path.resolve(__dirname, '../package.json'), 'utf8');
    const { nyc, scripts, devDependencies, workspaces, ...packageDataOther } = JSON.parse(
        packageData,
    );
    const newPackageData = {
        ...packageDataOther,
        main: './index.js',
        module: './es/index.js',
        cjs: './index.cjs.js',
        private: false,
    };
    const buildPath = path.resolve(__dirname, '../dist/package.json');

    await fse.writeFile(buildPath, JSON.stringify(newPackageData, null, 2), 'utf8');
    console.log(`Created package.json in ${buildPath}`);

    return newPackageData;
}

async function prepend(file, string) {
    const data = await fse.readFile(file, 'utf8');
    await fse.writeFile(file, string + data, 'utf8');
}

async function addLicense(packageData) {
    const license = `/** @license Telia Style Guide v${packageData.version}
 *
 * This source code is licensed under the ISC license found in the
 * LICENSE file in the root directory of this source tree.
 */
`;
    await Promise.all(
        [
            '../dist/index.js',
            '../dist/index.es.js',
            '../dist/index.cjs.js',
            '../dist/es/index.js',
            '../dist/umd/index.development.js',
            '../dist/umd/index.production.min.js',
        ].map(file => prepend(path.resolve(__dirname, file), license)),
    );
}

async function run() {
    await Promise.all(
        ['../README.md', '../VERSIONS.md', '../LICENSE'].map(file => copyFile(file)),
        ['./assets'].map(folder => copyFolder(folder))
    );
    const packageData = await createPackageFile();
    await addLicense(packageData);

    // TypeScript
    //const from = path.resolve(__dirname, '../src');
    //await Promise.all([
    //    typescriptCopy(from, path.resolve(__dirname, '../dist')),
    //    typescriptCopy(from, path.resolve(__dirname, '../dist/es')),
    //]);
}

run();