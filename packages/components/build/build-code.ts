/**
 * @file build-code
 */

import {IconCompiler, IIconToolsOptions} from '@icon-park/compiler';
import fs from 'fs';
import p from 'path';
import mkdirp from 'mkdirp';
import icons from '../source/icons.json';

export const BUILD_CONFIG: Omit<IIconToolsOptions, 'type'> = {
    author: 'IconPark',
    useType: true,
    fixedSize: true,
    stroke: 4,
    strokeLinejoin: 'round',
    strokeLinecap: 'round',
    cssPrefix: 'i',
    colors: [
        {
            type: 'color',
            color: '#000'
        },
        {
            type: 'color',
            color: '#2F88FF'
        },
        {
            type: 'color',
            color: '#FFF'
        },
        {
            type: 'color',
            color: '#43CCF8'
        }
    ],
    theme: [
        {
            name: 'outline',
            fill: [
                {
                    type: 'color',
                    color: '#333',
                    name: 'fill',
                    currentColor: true
                },
                {
                    type: 'color',
                    color: 'transparent',
                    fixed: true,
                    name: 'background'
                }
            ],
            order: [0, 1, 0, 1]
        },
        {
            name: 'filled',
            fill: [
                {
                    type: 'color',
                    color: '#333',
                    name: 'fill',
                    currentColor: true
                },
                {
                    type: 'color',
                    color: '#FFF',
                    fixed: true,
                    name: 'background'
                }
            ],
            order: [0, 0, 1, 1]
        },
        {
            name: 'two-tone',
            fill: [
                {
                    type: 'color',
                    color: '#333',
                    name: 'fill',
                    currentColor: true
                },
                {
                    type: 'color',
                    color: '#2F88FF',
                    name: 'twoTone'
                }
            ],
            order: [0, 1, 0, 1]
        },
        {
            name: 'multi-color',
            fill: [
                {
                    type: 'color',
                    color: '#333',
                    name: 'outStrokeColor',
                    currentColor: true
                },
                {
                    type: 'color',
                    color: '#2F88FF',
                    name: 'outFillColor'
                },
                {
                    type: 'color',
                    color: '#FFF',
                    name: 'innerStrokeColor'
                },
                {
                    type: 'color',
                    color: '#43CCF8',
                    name: 'innerFillColor'
                }
            ],
            order: [0, 1, 2, 3]
        }
    ]
};

export const SUPPORT_PLATFORMS = ['vue'] as any as [IIconToolsOptions['type']];


SUPPORT_PLATFORMS.forEach(type => {

    const compiler = IconCompiler.instance({
        ...BUILD_CONFIG,
        type
    });


    icons.forEach(item => compiler.appendIcon({
        name: item.name,
        description: item.title,
        content: item.svg,
        rtl: item.rtl
    }));

    const files = compiler.getIconFiles();

    files.forEach(({path, content}) => {
        const fp = p.join(__dirname, '../packages', type, 'src', path);
        mkdirp.sync(p.dirname(fp));
        fs.writeFileSync(fp, content, 'utf8');
    });
});

const indexFile = p.join(__dirname, '../packages/vue/src/index.ts');
const mapFile = p.join(__dirname, '../packages/vue/src/map.ts');

// 先删除文件map
fs.unlink(mapFile, (err) => {
    if (err && err.code!== 'ENOENT') {
        console.error('删除文件map失败:', err);
        return;
    }

    // 使用copyFile方法复制文件A到文件B
    fs.copyFile(indexFile, mapFile, (copyErr) => {
        if (copyErr) {
            console.error('复制文件index到文件map失败:', copyErr);
            return;
        }
        console.log('文件复制成功，已将文件index复制到文件map');
    });
});
