#! /usr/bin/env node
'use_strict';

import path from 'path';
/* Fix __dirname in ES6 */
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__dirname);
