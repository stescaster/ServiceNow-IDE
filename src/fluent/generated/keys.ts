import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '1e13f880c33d4f188733a461fb1263d0'
                    }
                    br0: {
                        table: 'sys_script'
                        id: '42fd339871c54cc68f7d85f4cedd19f8'
                    }
                    cs0: {
                        table: 'sys_script_client'
                        id: '432b6bb7b41d48a38af133869adac1dc'
                    }
                    'lodash.snakecase@4.1.1/index.js': {
                        table: 'sys_module'
                        id: 'af517344863349259b6eeeb248678e56'
                    }
                    'lodash.snakecase@4.1.1/package.json': {
                        table: 'sys_module'
                        id: 'ad9e7ea2e51c4671b66efbdf31d16844'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '9494c09bb422476a9b92e65e61b7d4f9'
                    }
                    src_server_script_ts: {
                        table: 'sys_module'
                        id: '2938dfdd7d5b403db22cd95d5dbbc034'
                    }
                }
            }
        }
    }
}
