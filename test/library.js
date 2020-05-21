/*
 * Copyright (c) 2017-2020 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

const assert = require('assert');
const cometd = require('..');

describe('library', () => {
    it('exports factory method', () => {
        assert.ok(cometd.createCometDServer);
    });

    it('constructs object', () => {
        const server = cometd.createCometDServer();
        assert.ok(server);
        server.close();
    });

    it('constructs object with options', () => {
        const options = {};
        const server = cometd.createCometDServer(options);
        assert.notStrictEqual(server.options, options);
        server.close();
    });
});
